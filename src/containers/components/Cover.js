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
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100vh;
  background-image: url(${CoverSrc});
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 500px;
  height: 250px;
  margin: 0 auto;
  margin-top: 200px;
  background-color: #fff;
  border-radius: 40px;
  cursor: pointer;
`;

const Title = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  height: 180px;
  padding: 20px;
  margin-top: 200px;
  margin: 0 auto;
  margin-top: 35px;
  border: 5px solid #000;
  border-radius: 40px;
  font-weight: 900;
  font-size: 50px;
  text-align: center;
`;

const Line = styled.div`
  width: 350px;
  height: 4px;
  margin-bottom: 10px;
  background-color: #000;
`;

const Button = styled.button`
  width: 130px;
  padding: 15px;
  margin-top: 40px;
  box-sizing: border-box;
  background-color: #000;
  border-radius: 40px;
  color: #fff;
  font-size: 18px;
  font-weight: 900;
  cursor: pointer;
`;
