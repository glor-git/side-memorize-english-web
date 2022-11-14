import { useQuery, useMutation } from '@apollo/client';
import { GET_WORDS, ADD_WORDS, DELETE_WORDS } from './gql/words.js';
import Note from './containers/Note.js';

function App() {
  function execDeleteWord() {
    deleteWord({variables: {id: "1"}})
  }

  const [deleteWord] = useMutation(DELETE_WORDS, { oncCompleted: deleteTeamCompleted })
  function deleteTeamCompleted() {
    console.log('delete');
  }



  const { loading, error, data } = useQuery(GET_WORDS);
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;
  console.log(data)
  return (
    <div className="App">
      <button onClick={execDeleteWord}>삭제</button>
    </div>
  );
}

export default App;
