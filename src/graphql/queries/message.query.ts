import { gql } from "@apollo/client";

export const GET_ALL_MESSAGES = gql`
  query {
    getAllMessages {
      _id
      content
      userName
      email
      plan
      content
      phone
      location
      createdAt
    }
  }
`;
