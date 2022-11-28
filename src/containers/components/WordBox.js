import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CopyIcon, SpeakerIcon, StarIcon } from "../../static/icon.js";
import { useRecoilValue, useSetRecoilState, useRecoilState } from 'recoil';
import { wordState, wordListState, idState } from '../../atom/word.js';
import { translator } from '../../utill/translator.js';
import { GET_WORDS, DELETE_WORD, ADD_WORD, GET_WORD } from "../../gql/words.js";
import { useQuery, useMutation } from "@apollo/client";

export default function WordBox(props) {
  const [color, setColor] = useState(null);
  const [translatedText, setTranslatedText] = useState('');
  const [id, setId] = useRecoilState(idState);
  const [word, setWord] = useRecoilState(wordState);
  const [wordList, setWordList] = useRecoilState(wordListState);
  const { loading, data, error, refetch } = useQuery(GET_WORDS);
  const getWord = useQuery(GET_WORD, { variables: { translatedWord: translatedText.translatedText } });
  const [ addWord ] = useMutation(ADD_WORD, { onCompleted: completed});
  const [ deleteWord ] = useMutation(DELETE_WORD, { onCompleted: completed});

  function execWord() {
    if (getWord.data.word == null) setAddWord();
    else setDeleteWord();
  }

  function setAddWord() {
    setId(prev => prev + 1);
    const createdDate = new Date()
    const data = {
      id: id,
      word: word,
      translatedWord: translatedText.translatedText,
      // user_id: userId,
      created_date: createdDate,
    }

    addWord({ variables: data })
  }

  function setDeleteWord() {
    deleteWord({ variables: { id: parseInt(getWord.data.word.id)} })
  }

  async function completed() {
    refetch();
    getWord.refetch();
  }

  function setMyWord() {
    if (getWord.data !== undefined) {
      if (getWord.data.word === null) setColor(null);
      else if (translatedText.translatedText === getWord.data.word.translatedWord) setColor('#FFD84D');
      else setColor(null);
    }
  }

  useEffect(() => {
    return (() => {
      setWord('');
    })
  }, [])

  useEffect(() => {
    if (word !== '') {
      translator(word).then(res => {
        setTranslatedText(res);
      });
    }
  }, [word])

  useEffect(() => {
    if (data) {
      setWordList(data);
    }
  }, [data])

  useEffect(() => {
    if (data) {
      setMyWord();
    }
  }, [translatedText, getWord.data])

  return (
    <WordBoxWrapper>
      <TextWrapper>{translatedText.translatedText}</TextWrapper>
      <IconWrapper>
        <CopyIcon />
        <SpeakerIcon />
        <div onClick={execWord}>
          <StarIcon color={color}/>
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
