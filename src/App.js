
import React from 'react';
import GridBoard from './components/GridBoard';
import NextBlock from './components/NextBlock';
import ScoreBoard from './components/ScoreBoard';
import Controls from './components/Controls';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Willkommen zu Tetris !</h2>
      </header>
        
      <GridBoard />
      <NextBlock />
      <ScoreBoard />
      <Controls />
    </div>
  );
}

export default App;
