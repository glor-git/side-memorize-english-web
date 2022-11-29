import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_WORDS, DELETE_WORD, ADD_WORD } from "../gql/words.js";
import styled from "styled-components";
import SearchWords from "../containers/components/SearchWords.js";
import WordBox from "../containers/components/WordBox.js";
import Cover from "../containers/components/Cover.js";

function Main() {
  const [coverOpen, setCoverOpen] = useState(true);
  
  const coverClose = () => {
    setCoverOpen(false);
  };

  return (
    <MainSectionWrapper>
      {coverOpen && <Cover coverClose={coverClose} />}
      <SearchWrapper>
        <SearchWords />
        <WordBox />
      </SearchWrapper>
    </MainSectionWrapper>
  );
}

const MainSectionWrapper = styled.section`
  position: relative;
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
`;

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 94px;
  margin-top: 100px;
`;
export default Main;