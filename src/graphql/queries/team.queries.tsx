import { gql } from "@apollo/client";

export const GET_ALL_TEAM = gql`
  query GetEmployees {
    getEmployees {
      id
      name
      role
      bio
      imageUrl
      linkedin
      github
      twitter
      facebook
      email
      phone
      address
      joinDate
      status
      createdAt
    }
  }
`;
