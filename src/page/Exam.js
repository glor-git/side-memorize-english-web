import React, { useState } from 'react';
import styled from "styled-components";
import { useQuery, useMutation } from "@apollo/client";
import { CopyIcon, SpeakerIcon, StarIcon } from "../static/icon.js";
import { GET_WORDS } from "../gql/words.js";

export default function Exam(props) {
  const [number, setNumber] = useState(0);
  const [isAnswer, setIsAnswer] = useState(false);
  const { loading, data, error, refetch } = useQuery(GET_WORDS);
  if (loading) return null;

  function handleNumber(num) {
    if (number + num < 0 || number + num >= data.words.length) return null
    setNumber(prev => prev + num);
    setIsAnswer(false);
  }

  function viewAnswer() {
    setIsAnswer(prev => !prev);
  }

  return (
    <ExamWrapper>
      <ExamBoxWrapper>
        <Left onClick={() => handleNumber(-1)}>
          <svg width="57" height="91" viewBox="0 0 57 91" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.08699 40.9109C-0.695665 43.4491 -0.695665 47.5712 2.08699 50.1094L44.8286 89.0963C47.6113 91.6346 52.1303 91.6346 54.913 89.0963C57.6957 86.5581 57.6957 82.4361 54.913 79.8979L17.2024 45.5L54.8907 11.1021C57.6734 8.56393 57.6734 4.44187 54.8907 1.90366C52.1081 -0.634553 47.589 -0.634553 44.8064 1.90366L2.06473 40.8906L2.08699 40.9109Z" fill="#CCCCCC"/>
          </svg>
        </Left>
        <WordBoxWrapper onClick={viewAnswer}>
          {data.words[number] !== undefined && <TextWrapper>
            {!isAnswer ? data.words[number].translatedWord : data.words[number].word}
          </TextWrapper>}
        </WordBoxWrapper>
        <Right onClick={() => handleNumber(1)}>
          <svg width="52" height="91" viewBox="0 0 52 91" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50.0961 40.9109C52.6346 43.4491 52.6346 47.5712 50.0961 50.1094L11.1037 89.0963C8.56513 91.6346 4.44249 91.6346 1.90393 89.0963C-0.634642 86.5581 -0.634642 82.4361 1.90393 79.8979L36.3066 45.5L1.92423 11.1021C-0.614334 8.56393 -0.614334 4.44187 1.92423 1.90366C4.4628 -0.634553 8.58543 -0.634553 11.124 1.90366L50.1164 40.8906L50.0961 40.9109Z" fill="#CCCCCC"/>
          </svg>
        </Right>
      </ExamBoxWrapper>
      <Page>
        {number + 1}/{data.words.length}
      </Page>
    </ExamWrapper>
);
}

const ExamWrapper = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ExamBoxWrapper = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const WordBoxWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  width: 800px;
  height: 100%;
  min-height: 426px;
  padding: 40px 50px;
  background: #ffffff;
  box-shadow: 1px 2px 4px 1px #c0c0c0;
  border-radius: 62px;
  text-align: center;
  cursor: pointer;
`;

const TextWrapper = styled.div `
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
`;

const Left = styled.div `
  cursor: pointer;
`;

const Right = styled.div `
  cursor: pointer;
`;

const Page = styled.div `
  margin-top: 50px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 33px;
  line-height: 40px;
  color: #8F8F8F;
`;