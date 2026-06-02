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
      const postNewMethods = await fetch(`${directusUrl}/items/vt_tekenmethodes`, { method: "post", body: JSON.stringify(newTekenMethode), headers: {"Authorization": " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjBjN2QwN2Q0LWQzYjYtNDRjNi1iYjM1LTlhOWEzMmYwOGQ3NCIsInJvbGUiOiI1MWVlNmI5ZS0wZmY5LTQyOTYtOGVkZC0xMzlkN2Q0OGM4YzIiLCJhcHBfYWNjZXNzIjp0cnVlLCJhZG1pbl9hY2Nlc3MiOnRydWUsInNlc3Npb24iOiJrS3pVTHY0amw2Qk9sbEdsdU1zcTVCTUJQVFVVTFV6Zk5hWWd2VHdIYUZjVUw2YUhvNTkxd2dYZzlqOVVRT2ZCIiwiaWF0IjoxNzgwMzIwMTQzLCJleHAiOjE3ODA0MDY1NDMsImlzcyI6ImRpcmVjdHVzIn0.VHpcBP7eFHpLQm7f7cq7257jxZa-HJAnTU_wDuovLLM", "Content-Type": "application/json"} });
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
