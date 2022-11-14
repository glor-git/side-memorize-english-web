import { gql } from '@apollo/client';

export const GET_WORDS = gql`
  query GetWords {
    words {
      created_data
      en_word
      id
      kr_word
      user_id
    }
  }
`;

export const DELETE_WORDS = gql`
  mutation DeleteWords($id: String!) {
    deleteWord(id: $id) {
      id
    } 
  }
`;