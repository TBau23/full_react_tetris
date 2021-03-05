import './App.css';
import React from 'react';
import GridSquare from './components/GridSquare';
import GridBoard from './components/GridBoard';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Willkommen zu Tetris !</h2>
      </header>
        
      <GridBoard />
      
    </div>
  );
}

export default App;
