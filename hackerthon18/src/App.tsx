import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Game from './component/Game';
import Result from './component/Result';

import './App.css'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/game' element={<Game />} />
        <Route path='/result' element={<Result />} />
      </Routes>
    </Router>
  )

}

export default App
