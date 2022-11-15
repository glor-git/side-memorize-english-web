import { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_WORDS, DELETE_WORD, ADD_WORD } from './gql/words.js';

function App() {
  const [words, setWords] = useState([]);
  const [id, setId] = useState(1);
  const [word, setWord] = useState();
  const [userId, setUserId] = useState();
  const [createdDate, setCreatedDate] = useState(new Date());
  const [ deleteWord ] = useMutation(DELETE_WORD);
  const [ addWord ] = useMutation(ADD_WORD);
  const data = useQuery(GET_WORDS);

  function execAddWord() {
    setId(prev => prev + 1);

    const data = {
      id: id,
      word: word,
      user_id: userId,
      created_date: createdDate,
    }
    addWord({ variables: data })
  }

  useEffect(() => {
    if (data.data !== undefined) {
      setWords(data.data.words);
    }
  }, [data])

  if (data.loading) return <p>Loading...</p>;
  if (data.error) return <p>Error :(</p>;

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>아이디</th>
            <th>단어</th>
            <th>유저 아이디</th>
            <th>생성 시간</th>
            <th>버튼</th>
          </tr>
        </thead>
        <tbody>
          {words.map(({ created_date, word, id, user_id }) => {
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{word}</td>
                <td>{user_id}</td>
                <td>{created_date}</td>
                <td><button onClick={() => deleteWord({variables: {id: id}})}>삭제</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <input type={'text'} value={word} placeholder={'단어'} onChange={(e) => setWord(e.target.value)}/>
      <input type={'text'} value={userId} placeholder={'유저아이디'} onChange={(e) => setUserId(e.target.value)}/>
      <button onClick={execAddWord}>추가</button>

    </div>
  );
}

export default App;
