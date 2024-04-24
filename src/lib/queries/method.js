export default function methodDescriptionQuery(gql, slug) {
    return gql`
      query VisualThinking {
        method(where: { slug: "${slug}" }) {
          title
          slug
          id
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
            url(transformation: {image: {}, document: {output: {format: webp}}})
          }
        }
      }
    `;
  }