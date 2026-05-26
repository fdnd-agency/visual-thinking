export const kennisclip_query = `
  query AllCategories {
    adconnect_kennisclip {
      title
      content
      category {
        slug
        title
        youTubeLink
     }
    }
  }
`;