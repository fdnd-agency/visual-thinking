import { createDirectus, rest, authentication, readItems } from '@directus/sdk';
import { gql } from 'graphql-request';
import { hygraph } from '../src/lib/utils/hygraph.js';
import dotenv from 'dotenv';
import fetch from 'node-fetch';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize Directus client
const directus = createDirectus(process.env.DIRECTUS_URL)
  .with(authentication())
  .with(rest());

async function authenticate() {
  try {
    await directus.login({
      email: process.env.DIRECTUS_EMAIL,
      password: process.env.DIRECTUS_PASSWORD,
    });
    console.log('Successfully authenticated with Directus');
  } catch (error) {
    console.error('Failed to authenticate with Directus:', error);
    process.exit(1);
  }
}

// Function to fetch all content from Hygraph
async function fetchHygraphContent() {
  const query = gql`
    query AllContent {
      pages {
        id
        title
        content {
          html
        }
      }
      methods {
        id
        title
        slug
        material
        duration
        template {
          url
        }
        pdf {
          url
        }
        description {
          html
        }
        steps {
          title
          description {
            html
          }
          visual {
            url
          }
        }
        categories {
          title
        }
        examples {
          url
        }
      }
      articles {
        id
        title
        visual {
          url
        }
        intro
        slug
        content {
          html
        }
      }
      miniCourses {
        id
        title
        slug
        slides {
          title
          content {
            html
          }
          image {
            url
          }
        }
      }
      categories {
        id
        title
        youTubeLink
        content {
          html
        }
      }
    }
  `;

  try {
    const data = await hygraph.request(query);
    return data;
  } catch (error) {
    console.error('Error fetching data from Hygraph:', error);
    throw error;
  }
}

// Function to upload assets to Directus
async function uploadAssetToDirectus(url) {
  if (!url) return null;
  
  try {
    const response = await fetch(url);
    const buffer = await response.buffer();
    
    const formData = new FormData();
    formData.append('file', new Blob([buffer]));
    
    const uploadedFile = await directus.request(
      rest.post('/files', formData)
    );
    
    return uploadedFile.id;
  } catch (error) {
    console.error('Error uploading asset:', error);
    return null;
  }
}

// Function to migrate content to Directus
async function migrateContent(content) {
  // Migrate categories first (they don't have dependencies)
  for (const category of content.categories) {
    try {
      await directus.request(
        rest.createItem('categories', {
          title: category.title,
          youTubeLink: category.youTubeLink,
          content: category.content.html
        })
      );
    } catch (error) {
      console.error('Error migrating category:', error);
    }
  }

  // Migrate pages
  for (const page of content.pages) {
    try {
      await directus.request(
        rest.createItem('pages', {
          title: page.title,
          content: page.content.html
        })
      );
    } catch (error) {
      console.error('Error migrating page:', error);
    }
  }

  // Migrate methods
  for (const method of content.methods) {
    try {
      const templateId = await uploadAssetToDirectus(method.template?.url);
      const pdfId = await uploadAssetToDirectus(method.pdf?.url);
      
      const steps = await Promise.all(
        method.steps.map(async (step) => ({
          title: step.title,
          description: step.description.html,
          visual: await uploadAssetToDirectus(step.visual?.url)
        }))
      );

      await directus.request(
        rest.createItem('methods', {
          title: method.title,
          slug: method.slug,
          material: method.material,
          duration: method.duration,
          template: templateId,
          pdf: pdfId,
          description: method.description.html,
          steps: steps,
          categories: method.categories.map(cat => cat.title)
        })
      );
    } catch (error) {
      console.error('Error migrating method:', error);
    }
  }

  // Migrate articles
  for (const article of content.articles) {
    try {
      const visualId = await uploadAssetToDirectus(article.visual?.url);
      
      await directus.request(
        rest.createItem('articles', {
          title: article.title,
          visual: visualId,
          intro: article.intro,
          slug: article.slug,
          content: article.content.html
        })
      );
    } catch (error) {
      console.error('Error migrating article:', error);
    }
  }

  // Migrate mini courses
  for (const course of content.miniCourses) {
    try {
      const slides = await Promise.all(
        course.slides.map(async (slide) => ({
          title: slide.title,
          content: slide.content.html,
          image: await uploadAssetToDirectus(slide.image?.url)
        }))
      );

      await directus.request(
        rest.createItem('mini_courses', {
          title: course.title,
          slug: course.slug,
          slides: slides
        })
      );
    } catch (error) {
      console.error('Error migrating mini course:', error);
    }
  }
}

// Main migration function
async function main() {
  try {
    await authenticate();
    console.log('Fetching content from Hygraph...');
    const content = await fetchHygraphContent();
    console.log('Starting migration to Directus...');
    await migrateContent(content);
    console.log('Migration completed successfully!');
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  }
}

main();