import React from 'react';
import styled from "styled-components";
import { CopyIcon, SpeakerIcon, StarIcon } from '../../static/icon.js';
export default function WordBox(props) {
  return (
    <WordBoxWrapper>
      <TextWrapper>{'friend, companion, buddy, pal, mate'}</TextWrapper>
      <IconWrapper>
        <CopyIcon />
        <SpeakerIcon />
        <StarIcon />
      </IconWrapper>
    </WordBoxWrapper>
  );
}

const WordBoxWrapper = styled.article `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: flex-start;
  width: 100%;
  height: 100%;
  min-height: 426px;
  padding: 40px 50px;
  background: #FFFFFF;
  box-shadow: 1px 2px 11px 1px #C0C0C0;
  border-radius: 62px;
`;

const TextWrapper = styled.div `
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 34px;
`;
const IconWrapper = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-start;
  gap: 30px;
`;