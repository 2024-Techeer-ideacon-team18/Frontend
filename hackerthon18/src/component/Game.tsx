import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import backgroundImg from '../assets/Background.png';

//Styled Component
const AppContainer = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    background-image: url(${backgroundImg});
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
`;

const Header = styled.header`
    
`;

const Title = styled.h1`
    font-size: 3rem;
    font-weight: bold;
`;

const Problem = styled.p`
    font-size: 2rem;
    font-weight: bold;
`;

const ResultBtn = styled.button`

`;

const Game: React.FC = () => {
    return (
        <AppContainer>
            <Header>
                <Title>open</Title>
                <Problem>문제 : Math 함수와 관련된 용어를 고르시오</Problem>
                <ResultBtn><Link to="/result">종료하기</Link></ResultBtn>
            </Header>
        </AppContainer>
    )
}

export default Game;