export const directusMiniCursusSlugQuery = (slug) => `
      query MiniCourse {
        vt_minicursussen(filter: { slug: { _eq: "${slug}" } }) {
          slug
          titel
          slides {
            titel
            inhoud
            afbeelding {
              id
            }
          }
        }
      }
    `;

export const directusMiniCursusesQuery = `
      query minicursus_page {
        vt_minicursussen_page {
          titel
          beschrijving
        }
          
        vt_minicursussen {
          titel
          slug
          afbeelding {
            id
          }
        }
      }
    `;

export const hygraphMiniCursusSlugQuery = (slug) => `
    query MiniCourse {
      miniCourse(where: {slug: "${slug}"}) {
        title
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
    }
  `;

export const hygraphMiniCursusesQuery = `
    query MiniCourses {
      page(where: {id: "clv8eb8jmw1hv07uncpsrut9l"}) {
        title
        content {
          html
        }
      }

      miniCourses {
        title
        slug
      }
    }
  `;
