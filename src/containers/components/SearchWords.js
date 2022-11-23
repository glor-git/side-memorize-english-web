import React from "react";
import styled from "styled-components";
import { SearchIcon } from "../../static/icon.js";

export default function SearchWords() {
  return (
    <SearchWordsWrapper>
      <Icon>
        <SearchIcon />
      </Icon>
      <SearchInput />
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

const Icon = styled.div`
  svg {
    width: 24px;
  }
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
