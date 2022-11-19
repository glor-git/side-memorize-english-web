import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Routers from './Routers.js';

function App(props) {

  const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache(),
  });

  return (
    <React.StrictMode>
      <ApolloProvider client={client}>
        <Routers />
      </ApolloProvider>
    </React.StrictMode>
  );
}

export default App;
