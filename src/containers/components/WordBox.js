import React from "react";
import styled from "styled-components";
import { CopyIcon, SpeakerIcon, StarIcon } from "../../static/icon.js";
export default function WordBox(props) {
  return (
    <WordBoxWrapper>
      <TextWrapper>{"friend, companion, buddy, pal, mate"}</TextWrapper>
      <IconWrapper>
        <CopyIcon />
        <SpeakerIcon />
        <StarIcon />
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
