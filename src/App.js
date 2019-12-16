import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainSection from './components/MainSection';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Electronics from './components/Electronics';

function App() {
  return (
    <div className="App">
    
        <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans&display=swap" rel="stylesheet"></link>
      
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/">
            <MainSection />
          </Route>
          <Route exact path="/electronics">
            <Electronics />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
