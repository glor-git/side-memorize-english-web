import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { RecoilRoot } from 'recoil';
import Routers from './Routers.js';

function App(props) {

  const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache(),
  });

  return (
    <React.StrictMode>
      <RecoilRoot>
        <ApolloProvider client={client}>
          <Routers />
        </ApolloProvider>
      </RecoilRoot>
    </React.StrictMode>
  );
}

export default App;
