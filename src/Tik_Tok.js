import { useState } from 'react';
import './App.css';
import Currency from './Currency';

function App() {

  let [answer, setanswer] = useState("");
  let [display, setdisplay] = useState("");


  const getdata = (n) => {
    alert("Hello");
  }



  return (
    <div className="App">
      <div>
        <input type='button' value={" "} onChange={(e)=>setanswer(e.target.value)} className='btn' onClick={() => getdata("1")}></input>
        <input type='button' value={" "} className='btn' onClick={() => getdata("2")}></input>
        <input type='button' value={" "} className='btn' onClick={() => getdata("3")}></input>
      </div>
      <div>
        <input type='button' value={" "} className='btn' onClick={() => getdata("4")}></input>
        <input type='button' value={" "} className='btn' onClick={() => getdata("5")}></input>
        <input type='button' value={" "} className='btn' onClick={() => getdata("6")}></input>
      </div>
      <div>
        <input type='button' value={" "} className='btn' onClick={() => getdata("7")}></input>
        <input type='button' value={" "} className='btn' onClick={() => getdata("8")}></input>
        <input type='button' value={" "} className='btn' onClick={() => getdata("9")}></input>
      </div>

      <Currency/>
    </div>
  );
}

export default App;
