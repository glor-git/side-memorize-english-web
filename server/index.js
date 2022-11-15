import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { database } from './database/database.js'

const typeDefs = `#graphql
    type Word {
        id: ID
        word: String
        created_date: Date
        user_id: String
    }

    type Query {
        words: [Word]
    }

    type Mutation { 
        deleteWord(id: ID): Word,
        addWord(
            id: ID
            word: String
            created_date: Date
            user_id: String
        ): Word,
    }

    scalar Date
`;

const resolvers = {
  Query: {
    words: () => database.words,
  },

  Mutation: {
    deleteWord: (parent, args, context, info) => {
      const deleted = database.words.filter((data) => {
        return data.id === args.id
      })[0]

      database.words = database.words.filter(data => {
        return data.id !== args.id
      })
      return deleted
    },

    addWord: (parent, args, context, info) => {
      const data = {
        id: args.id,
        word: args.word,
        created_date: args.created_data,
        user_id: args.user_id
      }
      database.words.push(data)

      return data
    },
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);