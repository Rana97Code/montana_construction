import { gql } from "@apollo/client";

export const GET_ALL_CASE_STUDIES = gql`
  query GetAllCaseStudies {
    getAllCaseStudies {
      id
      title
      category
      subCategory
      icon
      description
    }
  }
`;

export const GET_ALL_CASE_STUDIES_HIGHLIGHTS = gql`
  query {
    getAllCaseStudyHighlights {
      id
      headerTitle
      image
      items {
        id
        title
        icon
        description
      }
    }
  }
`;
