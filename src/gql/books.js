import { gql } from '@apollo/client';

export const GET_BOOK_AUTHOR = gql`
    query GetBooks {
      books {
        author
        id
      }
    }
  `;