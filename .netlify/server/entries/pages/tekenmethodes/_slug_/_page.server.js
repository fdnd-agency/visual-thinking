import { gql } from "graphql-request";
import { h as hygraph } from "../../../../chunks/hygraph.js";
import { M as MethodDescriptionQuery } from "../../../../chunks/method.js";
import "clsx";
/* empty css                                                           */
import "../../../../chunks/client.js";
const load = async ({ params }) => {
  const { slug } = params;
  const query = MethodDescriptionQuery(gql, slug);
  const data = await hygraph.request(query);
  return data;
};
export {
  load
};
