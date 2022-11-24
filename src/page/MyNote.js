import React, { useEffect } from 'react';
import { useQuery, useMutation } from "@apollo/client";
import { useRecoilValue } from 'recoil';
import { wordListState } from '../atom/word.js';

function MyNote(props) {
  const wordList = useRecoilValue(wordListState);
  const { words } = wordList;
  console.log(wordList)
  if (wordList.length === 0) return false;
  return (
    <div>
      {words.map(word => {
        return (
          <div>
            {word.word}
          </div>
        )
      })}
    </div>
  );
}

export default MyNote;