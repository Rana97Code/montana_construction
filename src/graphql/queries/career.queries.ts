import { gql } from "@apollo/client";

// benefits and parks for career page
export const GET_BENEFITS = gql`
  query {
    getBenefits {
      id
      title
      description
      icon
    }
  }
`;

// job openings
export const GET_ALL_JOB_OPENINGS = gql`
  query GetAllJobListing {
    getJobListings {
      id
      title
      location
      status
      jobResponsibilities
      educationalRequirements
      experienceRequirements
      additionalRequirements
      jobPreferences
      benefits
      applyBefore
      createdAt
      updatedAt
    }
  }
`;
