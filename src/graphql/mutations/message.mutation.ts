import { gql } from "@apollo/client";

export const SEND_MESSAGE = gql`
  mutation CreateMessage($createMessageDto: CreateMessageDto!) {
    createMessage(createMessageDto: $createMessageDto) {
      _id
      userName
      email
      phone
      location
      plan
      content
      createdAt
    }
  }
`;

export const DELETE_MESSAGE = gql`
  mutation DeleteMessage($id: String!) {
    deleteMessage(id: $id) {
      content
    }
  }
`;
