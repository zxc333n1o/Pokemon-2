import React from 'react';
import MainMenu from './components/MainMenu/MainMenu';
import Canvas from './components/Canvas';

import './App.css';

function App() {
  return (
    <div className="App">
      <MainMenu/>
      <Canvas/>
    </div>
  );
}

export default App;
