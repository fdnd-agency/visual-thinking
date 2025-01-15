export default function getQueryUrl(gql, slug) {
  return gql`
    query Artikelen {
  detailpagina(where: { slug: "${slug}" }) {
    title
    tekst {
      text
    }
    slug
  }
}

  `;
}
