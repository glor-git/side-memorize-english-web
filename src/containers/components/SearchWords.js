import React from 'react';
import styled from "styled-components";
import { SearchIcon } from '../../static/icon.js';

export default function SearchWords() {
  return (
    <SearchWordsWrapper>
      <SearchIcon />
      <Line />
      <SearchInput />
    </SearchWordsWrapper>
  );
}

const SearchWordsWrapper = styled.article `
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 32px;
  height: 90px;
  background: #FFFFFF;
  box-shadow: 1px 2px 11px 1px #C0C0C0;
  border-radius: 62px;
  padding: 28px 34px;
`;

const Line = styled.span `
  height: 100%;
  border: 2px solid #DCDCDC;
`;
const SearchInput = styled.input `
  width: 100%;
  height: 100%;
  border: none;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 34px;
  color: #000000;
`;