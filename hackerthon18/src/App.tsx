import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './component/Home';
import Game from './component/Game';
import Result from './component/Result';

import './App.css'

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/game' Component={Game} />
        <Route path='/result' Component={Result} />
      </Switch>
    </Router>
  )

}

export default App
