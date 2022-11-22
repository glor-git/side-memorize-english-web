import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_WORDS, DELETE_WORD, ADD_WORD } from "../gql/words.js";
import styled from "styled-components";
import SearchWords from "../containers/components/SearchWords.js";
import WordBox from "../containers/components/WordBox.js";
import Cover from "../containers/components/Cover.js";

function Main() {
  const [coverOpen, setCoverOpen] = useState(true);

  const coverClose = () => {
    setCoverOpen(false);
  };

  return (
    <MainSectionWrapper>
      {coverOpen && <Cover coverClose={coverClose} />}
      <SearchWrapper>
        <SearchWords />
        <WordBox />
      </SearchWrapper>
    </MainSectionWrapper>
  );
}

const MainSectionWrapper = styled.section`
  position: relative;
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
`;

const  SearchWrapper = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 94px;
  margin-top: 100px;
`;
export default Main;

// const [id, setId] = useState(1);
// const [word, setWord] = useState();
// const [userId, setUserId] = useState();
//
// const { loading, data, error, refetch } = useQuery(GET_WORDS);
// const [ deleteWord ] = useMutation(DELETE_WORD, { onCompleted: deleteWordCompleted});
// const [ addWord ] = useMutation(ADD_WORD, { onCompleted: addWordCompleted});
//
// function addWordCompleted(data) {
//   alert(JSON.stringify(data));
//   refetch();
// }
// function deleteWordCompleted(data) {
//   alert(JSON.stringify(data));
//   refetch();
// }
//
// function execAddWord() {
//   setId(prev => prev + 1);
//   const createdDate = new Date()
//   const data = {
//     id: id,
//     word: word,
//     user_id: userId,
//     created_date: createdDate,
//   }
//   addWord({ variables: data })
// }
//
// if (loading) return <p>Loading...</p>;
// if (error) return <p>Error :(</p>;
//
// return (
//   <div className="App">
//     <table>
//       <thead>
//       <tr>
//         <th>아이디</th>
//         <th>단어</th>
//         <th>유저 아이디</th>
//         <th>생성 시간</th>
//         <th>버튼</th>
//       </tr>
//       </thead>
//       <tbody>
//       {data.words.map(({ created_date, word, id, user_id }) => {
//         return (
//           <tr key={id}>
//             <td>{id}</td>
//             <td>{word}</td>
//             <td>{user_id}</td>
//             <td>{created_date}</td>
//             <td><button onClick={() => deleteWord({variables: {id: id}})}>삭제</button></td>
//           </tr>
//         )
//       })}
//       </tbody>
//     </table>
//     <input type={'text'} value={word} placeholder={'단어'} onChange={(e) => setWord(e.target.value)}/>
//     <input type={'text'} value={userId} placeholder={'유저아이디'} onChange={(e) => setUserId(e.target.value)}/>
//     <button onClick={execAddWord}>추가</button>
//
//   </div>
