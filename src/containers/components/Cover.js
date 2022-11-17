import styled from "styled-components";
import React, { useState } from "react";
import CoverSrc from "../../img/composition.jpg";

export default function Cover(props) {
  const { open, close } = props;

  return (
    <div>
      {open ? (
        <CoverWrapper>
          <TitleWrapper>
            <Title>
              English Note
              <Line />
              <Line />
            </Title>
          </TitleWrapper>
          <Button onClick={close}>Start</Button>
        </CoverWrapper>
      ) : null}
    </div>
  );
}

const CoverWrapper = styled.div`
  background-image: url(${CoverSrc});
  width: 100%;
  height: 100vh;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleWrapper = styled.div`
  width: 500px;
  height: 250px;
  background-color: #fff;
  border-radius: 40px;
  margin: 0 auto;
  margin-top: 200px;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

const Title = styled.button`
  width: 400px;
  height: 180px;
  border-radius: 40px;
  margin-top: 200px;
  border: 5px solid #000;
  margin: 0 auto;
  margin-top: 35px;
  text-align: center;
  font-weight: 900;
  font-size: 50px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Line = styled.div`
  width: 350px;
  height: 4px;
  background-color: #000;
  margin-bottom: 10px;
`;

const Button = styled.button`
  width: 130px;
  background-color: #000;
  border-radius: 40px;
  color: #fff;
  padding: 15px;
  font-weight: 900;
  font-size: 18px;
  margin-top: 40px;
  box-sizing: border-box;
  cursor: pointer;
`;
