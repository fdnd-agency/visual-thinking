
const HYGRAPH_KEY = process.env.HYGRAPH_KEY
const HYGRAPH_URL = process.env.HYGRAPH_URL

import { GraphQLClient } from 'graphql-request'

export const hygraph = new GraphQLClient(HYGRAPH_URL, {
    headers: {
        Authorization: `Bearer ${HYGRAPH_KEY}`,
    },
})