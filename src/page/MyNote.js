import React, {useEffect, useState} from 'react';
import { useQuery, useMutation } from "@apollo/client";
import { useRecoilValue } from 'recoil';
import { wordListState } from '../atom/word.js';
import styled from "styled-components";
import { StarIcon } from "../static/icon.js";
import { DELETE_WORD, GET_WORDS } from "../gql/words.js";
import { Link } from "react-router-dom";

export default function MyNote(props) {
  const [color, setColor] = useState('#FFD84D');
  // const wordList = useRecoilValue(wordListState);
  // const { words } = wordList;
  const { loading, data, error, refetch } = useQuery(GET_WORDS);
  const [ deleteWord ] = useMutation(DELETE_WORD, { onCompleted: completed});

  async function completed() {
    refetch();
  }

  async function setDeleteWord(id) {
    await deleteWord({ variables: { id: parseInt(id)} })
  }

  if (data === undefined) return false;
  return (
    <MyNoteWrapper>
      <TestButton><Link to={'/exam'}>테스트 보기</Link></TestButton>
      {data.words.map(word => {
        return (
          <MyWordList>
            <WordWrapper>
              <li>{word.word}</li>
              <li>{word.translatedWord}</li>
            </WordWrapper>
            <IconWrapper onClick={() => setDeleteWord(word.id)}>
              <StarIcon color={color}/>
            </IconWrapper>
          </MyWordList>
        )
      })}
    </MyNoteWrapper>
  );
}

const MyNoteWrapper = styled.div `
  display: flex;
  flex-direction: column;
  width: 800px;
  margin: 0 auto;
`;

const TestButton = styled.button `
  align-self: flex-end;
  width: 100px;
  height: 40px;
  margin-top: 82px;
  background: #FFFFFF;
  border: 3px solid #000000;
  border-radius: 10px;
  cursor: pointer;
  
  a {
    color: black;
  }
`;

const MyWordList = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 2px solid #DADADA;
`;
const WordWrapper = styled.ul `
  display: flex;
  flex-direction: row;
  gap: 40px;
`;
const IconWrapper = styled.div `
  width: 18px;
  height: 18px;
  cursor: pointer;
`;