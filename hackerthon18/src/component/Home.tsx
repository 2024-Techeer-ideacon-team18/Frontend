import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import backgroundImg from "../assets/Background.png";
import Math from "../assets/Math.png";

export default function Home() {
  return (
    <AppContainer>
      <Header>
        <Title>What's your Answer?</Title>
        <IconRow>
          <RoundButton>
            <RoundImage src={Math} alt="round" />
          </RoundButton>
          <RoundButton>
            <RoundImage src={Math} alt="round" />
          </RoundButton>
          <RoundButton>
            <RoundImage src={Math} alt="round" />
          </RoundButton>
        </IconRow>
        <ResultBtn>
          <Link to="/game">시작하기</Link>
        </ResultBtn>
      </Header>
    </AppContainer>
  );
}

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

const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
`;

const IconRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100vw; /* 부모 컨테이너의 너비에 맞게 조정 */
  margin: 10px 0;
`;

const RoundButton = styled.button`
  background-color: transparent;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
    cursor: url("../assets/Math.png"); /* 원하는 이미지의 경로로 변경하세요 */
  }
`;

const RoundImage = styled.img`
  width: 50%;
  height: 50%;
  object-fit: cover;
  border-radius: 50%; /* 이미지도 원형 모양을 유지 */
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
