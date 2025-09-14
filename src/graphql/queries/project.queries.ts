import { gql } from "@apollo/client";

export const GET_ALL_STACK = gql`
  query {
    getAllTechItems {
      id
      name
      icon
    }
  }
`;

export const GET_ALL_PROJECTS = gql`
  query {
    getAllProjects {
      id
      title
      description
      image
      techStack
      status
      timeline
      link
    }
  }
`;
