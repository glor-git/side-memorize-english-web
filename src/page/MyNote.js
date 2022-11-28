import React, {useEffect, useState} from 'react';
import { useQuery, useMutation } from "@apollo/client";
import { useRecoilValue } from 'recoil';
import { wordListState } from '../atom/word.js';
import styled from "styled-components";
import { StarIcon } from "../static/icon.js";
import { DELETE_WORD, GET_WORDS } from "../gql/words.js";

export default function MyNote(props) {
  const [color, setColor] = useState('#FFD84D');
  const wordList = useRecoilValue(wordListState);
  const { loading, data, error, refetch } = useQuery(GET_WORDS);
  const { words } = wordList;
  const [ deleteWord ] = useMutation(DELETE_WORD, { onCompleted: completed});

  async function completed() {
    refetch();
  }

  async function setDeleteWord(id) {
    await deleteWord({ variables: { id: parseInt(id)} })
  }

  if (wordList.length === 0) return false;
  return (
    <MyNoteWrapper>
      <button>테스트 보기</button>
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
  width: 800px;
  margin: 0 auto;
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