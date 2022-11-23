import React, { useState } from "react";
import styled from "styled-components";
import { SearchIcon } from "../../static/icon.js";
import { useSetRecoilState } from 'recoil';
import { wordState } from '../../atom/word.js';

export default function SearchWords() {
  const setWord = useSetRecoilState(wordState);
  const [word2, setWord2 ] = useState('');

  return (
    <SearchWordsWrapper>
      <IconWrapper>
        <SearchIconWrapper onClick={() => setWord(word2)}>
          <SearchIcon />
        </SearchIconWrapper>
      </IconWrapper>
      <SearchInput value={word2} onChange={(e) => setWord2(e.target.value)}/>
    </SearchWordsWrapper>
  );
}

const SearchWordsWrapper = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 32px;
  width: 800px;
  height: 50px;
  padding: 20px;
  background: #ffffff;
  box-shadow: 1px 2px 4px 1px #c0c0c0;
  border-radius: 62px;
`;

const IconWrapper = styled.div`
  svg {
    width: 24px;
  }
`;

const SearchIconWrapper = styled.div `
  cursor: pointer;
`;

const SearchInput = styled.input`
  width: 100%;
  border: none;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #000000;
  &:focus {
    outline: none;
  }
`;
