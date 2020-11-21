import { Board } from 'components';
import { ShapeL } from 'components/Tetromino';
import './App.css';

function App() {
  return (
    <div className="App">
      <Board>
        <ShapeL />
      </Board>
    </div>
  );
}

export default App;
