import './App.css';
import React from 'react';
import GridSquare from './components/GridSquare';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Willkommen zu Tetris !</h2>
      </header>
        
      <GridSquare color='1' />
      
    </div>
  );
}

export default App;
