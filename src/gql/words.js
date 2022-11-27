import { gql } from '@apollo/client';

export const GET_WORDS = gql`
    query GetWords {
        words {
            created_date
            id
            user_id
            word
        }
    }
`;

export const GET_WORD = gql`
    query GetWord ($word: String) {
        word(word: $word) {
            created_date
            id
            user_id
            word
        }
    }
`;


export const DELETE_WORD = gql`
    mutation DeleteWord($id: ID!) {
        deleteWord(id: $id) {
            created_date
            id
            user_id
            word
        }
    }
`;

export const ADD_WORD = gql`
    mutation AddWord($id: ID, $word: String, $created_date: Date, $user_id: String) {
        addWord(id: $id, word: $word, created_date: $created_date, user_id: $user_id) {
            created_date
            id
            user_id
            word
        }
    }
`;