import { gql } from "@apollo/client";

export const CREATE_RESUME = gql`
  mutation CreateResume($createResumeInput: CreateResumeInput!) {
    createResume(createResumeInput: $createResumeInput) {
      id
      name
      phone
      email
      address
      position
      coverLetter
      resumeFile
      portfolio
      linkedInUrl
      yearsOfExperience
      keySkills
      createdAt
      updatedAt
    }
  }
`;
