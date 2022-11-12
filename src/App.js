import { useQuery } from '@apollo/client';
import { GET_BOOK_AUTHOR } from './gql/books.js';
import Note from './containers/Note.js';

function App() {

  const { loading, error, data } = useQuery(GET_BOOK_AUTHOR);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="App">
      {data.books.map((book) => {
        return (
          <div>
            {book.author}
            <Note />
          </div>
        )
      })}
    </div>
  );
}

export default App;
