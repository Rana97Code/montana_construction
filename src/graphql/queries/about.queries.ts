import { gql } from "@apollo/client";

export const GET_ALL_FAQ = gql`
  query GetAllFqas {
    getAllFqas {
      id
      question
      answer
    }
  }
`;

// client values for home page
export const GET_ALL_CLIENT_VALUES = gql`
  query {
    getAllClientValues {
      id
      type
      title
      description
      src
      alt
      isOptional
    }
  }
`;

// client stats
export const GET_ALL_CLIENT_STATS = gql`
  query {
    getClientStats {
      id
      completedProjects
      employees
      yearsOnMarket
      clients
    }
  }
`;
