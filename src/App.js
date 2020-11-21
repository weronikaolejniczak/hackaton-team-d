import { Board } from 'components';
import {
  ShapeI,
  ShapeJ,
  ShapeL,
  ShapeO,
  ShapeS,
  ShapeT,
  ShapeZ,
} from 'components/Tetromino';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Board>
        <ShapeI />
        <ShapeJ />
        <ShapeL />
        <ShapeO />
        <ShapeS />
        <ShapeT />
        <ShapeZ />
      </Board>
    </div>
  );
}

export default App;
