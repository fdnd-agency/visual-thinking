import { createDirectus, graphql } from "@directus/sdk";
import { GraphQLClient } from "graphql-request";

const hygraphUrl = process.env.HYGRAPH_URL;
const directusUrl = process.env.DIRECTUS_URL;
const directusKey = process.env.DIRECTUS_KEY;
const directus = createDirectus(process.env.DIRECTUS_URL).with(graphql());
const hygraph = new GraphQLClient(hygraphUrl, {
  headers: {
    Authorization: `Bearer ${process.env.HYGRAPH_KEY}`,
  },
});

const query = `
  query Methods {
    methods(first: 100) {
      id
      slug
      title
      description {
        html
      }
      duration
    }
  }
`;

//   const newTekenMethodes = [];
const response = await hygraph.request(query);
console.log(response);
const methods = response.methods; //array

const newTekenMethodes = [];
methods.forEach((method) => {
  const newDirectusSchema = {
    titel: method.title,
    beschrijving: method.description.html,
    slug: method.slug,
    duur: method.duration,
  };
  newTekenMethodes.push(newDirectusSchema);
});

newTekenMethodes.forEach(async (newTekenMethode, i) => {
  if (i == 3) {
    try {
      const postNewMethods = await fetch(`${directusUrl}/items/vt_tekenmethodes`, { method: "post", body: JSON.stringify(newTekenMethode), headers: {"Authorization": " your token", "Content-Type": "application/json"} });
      console.log(postNewMethods.ok)
      console.log(postNewMethods);
      return;
    } catch (error) {
      console.log(error);
      console.log(JSON.stringify(error.errors));
      return;
    }
    return;
  }
});
