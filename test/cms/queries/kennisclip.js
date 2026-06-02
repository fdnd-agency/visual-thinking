export const directusKennisclipSlugQuery = (slug) => `
    query SingleKennisClip {
        vt_kennisclips(filter: { slug: { _eq: "${slug}" } })  {
            slug
            titel
            youtube_link
            beschrijving
        }
    }
`;

export const directusKennisclipsQuery = `
    query allKennisClips {
        vt_kennisclips {
            titel
            beschrijving
            slug
            youtube_link
            }
    }`

export const hygraphKennisclipSlugQuery = (slug) => `
    query SingleKennisClip {
        category(where: {slug: "${slug}"}) {
            title
            content {
                html
                text
            }
            youTubeLink
            slug
        }
    }`;

export const hygraphKennisClipsQuery = 
    `query allKennisClips {
        categories {
            title
            content {
                html
                text
            }
            youTubeLink
            slug
        }
    }`;
