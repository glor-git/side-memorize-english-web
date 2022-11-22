import styled from "styled-components";
import React, { useState } from "react";
import CoverSrc from "../../img/composition.jpg";

export default function Cover(props) {
  const { coverOpen, coverClose } = props;

  return (
    <CoverWrapper>
      <TitleWrapper>
        <Title>
          English Note
          <Line />
          <Line />
        </Title>
      </TitleWrapper>
      <Button onClick={coverClose}>Start</Button>
    </CoverWrapper>
  );
}

const CoverWrapper = styled.div`
  position: fixed;
  top: 56px;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  width: 100%;
  height: calc(100vh - 56px);
  background-image: url(${CoverSrc});
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 250px;
  padding: 35px 50px;
  background-color: #fff;
  border-radius: 40px;
  cursor: pointer;
`;

const Title = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  border: 5px solid #000;
  border-radius: 40px;
  font-weight: 900;
  font-size: 50px;
  text-align: center;
`;

const Line = styled.div`
  width: 100%;
  height: 4px;
  margin-bottom: 10px;
  background-color: #000;
`;

const Button = styled.button`
  width: 130px;
  padding: 15px;
  background-color: #000;
  border-radius: 40px;
  color: #fff;
  font-size: 18px;
  font-weight: 900;
  cursor: pointer;
`;
