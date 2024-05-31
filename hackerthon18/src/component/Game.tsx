import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import backgroundImg from '../assets/Background.png';

//Styled Component
const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${backgroundImg});
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
`;

const Header = styled.header`
    padding: 2% 5%;
    display: flex;
    width: 80%;
    height: 10%;
    align-items: center;
    justify-content: space-between;
`;

const Title = styled.p`
    font-size: 20px;
    color: white;
`;

const Problem = styled.p`
    color: white;
    font-size: 40px;
    font-family: 'Inter';
    font-weight: 800;
    word-wrap: 'break-word';
`;

const ResultBtn = styled.button`
    background: linear-gradient(160deg, rgba(255, 255, 255, 0.30) 0%, rgba(199, 172, 255, 0.10) 100%);
    box-shadow: 0px 3.0615639686584473px 3.0615639686584473px rgba(0, 0, 0, 0.25);
    border-radius: 28;
    border: 0.77px rgba(255, 255, 255, 0.50) solid;
    backdrop-filter: blur(50px);

`;

const WordsContainer = styled.div`
    height: 70vh;
    background: linear-gradient(160deg, rgba(255, 255, 255, 0.30) 0%, rgba(199, 172, 255, 0.10) 100%);
    box-shadow: 0px 3.0615639686584473px 3.0615639686584473px rgba(0, 0, 0, 0.25);
    border-radius: 36;
    border: 0.77px rgba(255, 255, 255, 0.50) solid;
    backdrop-filter: blur(50px);
    border-radius: 50;
    position: relative;
    overflow: hidden;
`;

  const getRandomPosition = (maxWidth: number, maxHeight: number): { x: number, y: number } => {
    const x = Math.floor(Math.random() * (maxWidth - 100));
    const y = Math.floor(Math.random() * (maxHeight - 50));
    return { x, y };
  };

  const Word = styled.div<{ x: number, y: number, isWrong: boolean}>`
    position: absolute;
    top: ${({ y }) => y}px;
    left: ${({ x }) => x}px;
    border: ${({ isWrong }) => isWrong ? '2px solid red' : 'none'};
`;

const Game: React.FC = () => {
    const mathFunctions = [
        '1', 'acos', 'acosh', 'asin', '11', 'atan', '12', '6', 'cbrt', '13',
        'clz32', 'cos', '2', 'exp', 'expm1', '8', '3', 'hypot', 'imul', 'log',
        '10', '9', 'max', '4', 'pow', 'random', 'round', 'sign', 'sin', '5',
        'sqrt', 'tan', '14', '7'
    ];

    const targetWords = ['acos', 'acosh', 'atan', 'cbrt', 'clz32', 'cos', 'exp', 'expm1', 'hypot', 'imul', 'log', 'max', 'pow', 'random', 'round', 'sign', 'sin', 'sqrt', 'tan'];

    const [words, setWords] = useState<{ word: string, x: number, y: number }[]>([]);
    const [inputWord, setInputWord] = useState('');
    const [wrongWords, setWrongWords] = useState<string[]>([]);

    const wordsContainerRef = useRef<HTMLDivElement>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputWord(e.target.value);
    };

    const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            // 입력된 단어가 내가 지정한 목록에 있는지 확인
            const isTargetWord = targetWords.includes(inputWord);
    
            if (isTargetWord) {
                // 내가 지정한 목록에 있는 경우 해당 단어를 제거
                setWords(prevWords => prevWords.filter(wordObj => wordObj.word !== inputWord));
            } else {
                // 내가 지정한 목록에 없는 경우 빨간 테두리가 그려짐
                setWrongWords(prevWrongWords => [...prevWrongWords, inputWord]);
            }
    
            // 입력 단어 초기화
            setInputWord('');
        }
    };
    
    
    useEffect(() => {
        const newWords = mathFunctions.map(word => ({
            word,
            ...getRandomPosition(window.innerWidth, window.innerHeight)
        }));
        setWords(newWords);
    }, [wordsContainerRef.current]);

    return (
        <AppContainer>
            <Header>
                <Problem>문제 : Math 함수와 관련된 용어를 고르시오</Problem>
                <ResultBtn><Link to="/result"style={{ textDecoration: 'none', color: 'white', fontFamily: 'DotGothic16', fontWeight: '400', fontSize: 20 }}>종료하기</Link></ResultBtn>
            </Header>
            <WordsContainer>
                {words.map((word, index) => (
                    <Word key={index} x={word.x} y={word.y} isWrong={wrongWords.includes(word.word)} style={{color:'white'}}>
                        {word.word}
                    </Word>
                ))}
            </WordsContainer>
            <input
                    type="text"
                    value={inputWord}
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    style={{width: '20%', height: '8%', background: 'rgba(165.22, 255, 242.84, 0.30)', borderRadius: 50, marginTop: '1%', border:'none'}}
                />
        </AppContainer>
    )
}

export default Game;