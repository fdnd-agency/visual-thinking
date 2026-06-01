export const kennisclip_query = `
  query kennisclip_page {
    vt_kennisclips_page {
      titel
      beschrijving
      kennisclips {
        slug
        titel
        youtube_link
     }
    }
  }
`;

export const kennisclipSlugQuery = (slug) => `
    query SingleKennisClip {
        vt_kennisclips(filter: { slug: { _eq: "${slug}" } })  {
            slug
            titel
            youtube_link
            beschrijving
        }
    }
`