import { gql } from "@apollo/client";

export const ADMIN_LOGIN = gql`
  query Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
        userName
        mobile
        role
        profilePicture
      }
    }
  }
`;
