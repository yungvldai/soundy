import React from 'react';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router basename="/soundy">
        <Header />
        <Content />
      </Router>
    </div>
  );
}

export default App;
