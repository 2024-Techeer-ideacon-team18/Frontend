import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import backgroundImg from "../assets/Background.png";
import Math from "../assets/Math.png";

export default function Result() {
  return (
    <AppContainer>
      <div
        style={{ flexDirection: "row", display: "flex", alignItems: "center" }}
      >
        <Title>What's your Answer?</Title>
        <SmallContainer></SmallContainer>
      </div>

      <Container></Container>

      <ResultBtn>
        <Link to="/game">시작하기</Link>
      </ResultBtn>
    </AppContainer>
  );
}

//Styled Component
const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${backgroundImg});
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-right: 5rem;
`;
const Container = styled.div`
  width: 40vw;
  height: 40vw;
  background: linear-gradient(
    160deg,
    rgba(255, 255, 255, 0.3) 0%,
    rgba(199, 172, 255, 0.1) 100%
  );
  box-shadow: 0px 3.0615639686584473px 3.0615639686584473px rgba(0, 0, 0, 0.25);
  border-radius: 28px;
  border: 0.77px rgba(255, 255, 255, 0.5) solid;
  backdrop-filter: blur(50px);
`;

const SmallContainer = styled.div`
  width: 10vw;
  height: 5vw;
  background: linear-gradient(
    160deg,
    rgba(255, 255, 255, 0.3) 0%,
    rgba(199, 172, 255, 0.1) 100%
  );
  box-shadow: 0px 3.0615639686584473px 3.0615639686584473px rgba(0, 0, 0, 0.25);
  border-radius: 28px;
  border: 0.77px rgba(255, 255, 255, 0.5) solid;
  backdrop-filter: blur(50px);
`;
const ResultBtn = styled.button`
  width: 10rem;
  height: 3rem;
  background-color: #fff;
  color: #1c3487;
  margin-top: 20px;
  text-align: center;
  font-weight: 200;
`;
