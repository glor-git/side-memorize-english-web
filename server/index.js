import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { database } from './database/database.js'

const typeDefs = `#graphql
  type Word {
    id: String
    kr_word: String
    en_word: String
    created_data: String
    user_id: String
  }

  type Query {
    words: [Word]
  }

  type Mutation { 
    deleteWord(id: String): Word
  }
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
    }
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