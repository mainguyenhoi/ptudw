import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Router} from 'react-router-dom';
import Routers from './routes';
import history from './history';


function App() {
  return (
    <Router
      history={history}
    >
      <div className="body">
        <Routers />
      </div>
    </Router>
  );
}

export default App;
