import React from 'react';
import Header from './components/Header';
import Routes from './routes';

import Main from './pages/main';

import './styles.css';

const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
);

export default App;
