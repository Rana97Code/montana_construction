import { gql } from "@apollo/client";

export const GET_ALL_BLOG = gql`
  query GetAllBlogPosts {
    getAllBlogPosts {
      id
      title
      author
      category
      publicationDate
      imageUrl
      readMoreLink
      author
      authorAvatar
      createdAt
      updatedAt
    }
  }
`;
