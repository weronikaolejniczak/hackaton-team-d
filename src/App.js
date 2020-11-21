import { Board } from 'components';
import './App.css';

function App() {
  const tetrominoNum = Math.floor(Math.random() * 7);

  return (
    <div className='App'>
      <Board num={tetrominoNum} />
    </div>
  );
}

export default App;
