import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CopyIcon, SpeakerIcon, StarIcon } from "../../static/icon.js";
import { useRecoilValue, useSetRecoilState, useRecoilState } from 'recoil';
import { wordState, wordListState, idState } from '../../atom/word.js';
import { translator } from '../../utill/translator.js';
import { GET_WORDS, DELETE_WORD, ADD_WORD } from "../../gql/words.js";
import { useQuery, useMutation } from "@apollo/client";

export default function WordBox(props) {
  const [translatedText, setTranslatedText] = useState('');
  const [id, setId] = useRecoilState(idState);
  const [word, setWord] = useRecoilState(wordState);
  const setWordList = useSetRecoilState(wordListState);
  const { loading, data, error, refetch } = useQuery(GET_WORDS);
  const [ addWord ] = useMutation(ADD_WORD, { onCompleted: addWordCompleted});

  function execAddWord() {
    setId(prev => prev + 1);
    const createdDate = new Date()
    const data = {
      id: id,
      word: translatedText.translatedText,
      // user_id: userId,
      created_date: createdDate,
    }
    addWord({ variables: data })
  }

  async function addWordCompleted() {
    refetch();
  }

  useEffect(() => {
    if (word !== '') {
      translator(word).then(res => {
        setTranslatedText(res);
        setWord('');
      });
    }
  }, [word])

  useEffect(() => {
    if (data) {
      setWordList(data);
    }
  }, [data])

  return (
    <WordBoxWrapper>
      <TextWrapper>{translatedText.translatedText}</TextWrapper>
      <IconWrapper>
        <CopyIcon />
        <SpeakerIcon />
        <div onClick={execAddWord}>
          <StarIcon />
        </div>
      </IconWrapper>
    </WordBoxWrapper>
  );
}

const WordBoxWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 800px;
  height: 100%;
  min-height: 426px;
  padding: 40px 50px;
  background: #ffffff;
  box-shadow: 1px 2px 4px 1px #c0c0c0;
  border-radius: 62px;
`;

const TextWrapper = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 34px;
`;
const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  align-self: flex-start;
  gap: 30px;
  cursor: pointer;
  svg {
    width: 25px;
  }
`;
