import { useState } from 'react';
import './App.css';

function App() {

  const [board, setBoard] = useState(Array(9).fill(''));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [display, setdisplay] = useState('');
  const [disable, setdisable] = useState(false);
  const [winningLine, setWinningLine] = useState([]);



  const getdata = (index) => {
    if (board[index] === '') {
      const newBoard = [...board];//copy create kre che
      newBoard[index] = currentPlayer;
      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');

      checkwin(newBoard);
      // checkwin();
    }
  }

  const checkwin = (e) =>{
    // alert();
    const win = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]  
    ];

    for (const combo of win) {
      const [a,b,c] = combo;
      if(e[a] && e[a] === e[b] && e[a] === e[c]){
        setdisplay(e[a]+" is the Winner...!");
        setdisable(true);
        setWinningLine(combo);
        break;
      }
    }
  }

 
  const btnreset = () => {
    // alert();
    setBoard(Array(9).fill(''));
    setCurrentPlayer('X');
    setdisplay("");
    setdisable(false);
    setWinningLine([]);

  }



  return (
    <div className="App">
      <p className='tilte'>Tic-Tac-Toe Game</p>
      <div className='div'>
        {board.map((item, index) => (
          <input key={index} type='button' value={item} className='btn'
              style={{color:winningLine.includes(index)?'green':''}}
            onClick={() => getdata(index)} disabled={disable}
          ></input>
        ))}
      </div>
      <p className='dips'>{display}</p>
      <input type='button'  className='btn1' value={"RESET"} onClick={btnreset}></input>

    </div>
  );
}

export default App;
