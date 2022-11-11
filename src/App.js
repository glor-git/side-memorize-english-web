import { useQuery } from '@apollo/client';
import { GET_BOOK_AUTHOR } from './gql/books.js';

function App() {

  const { loading, error, data } = useQuery(GET_BOOK_AUTHOR);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="App">
      {data.books.map((book) => {
        console.log(book)
        return (
          <div>
            {book.author}
          </div>
        )
      })}
    </div>
  );
}

export default App;
