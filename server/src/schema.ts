import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    categories: [String]
    category(category: String!): RandomCategoryJoke!
  }
  type RandomCategoryJoke {
    icon_url: String
    value: String
    id: String
    url: String
    created_at: String
    updated_at: String
  }
`;

export default typeDefs;
