import'./App.css';
import React from 'react';
import { useState } from 'react';
import { sculptureList } from './data';


// function Boton({onClick,children}){
//   return(
//     <button onClick={e =>{
//       e.stopPropagation();
//       onClick();
//     }}>{children}</button>

//   )
// }

function Square( onSquareClick){
const[value,setValue] = useState(null);

function handleClick(){
  setValue('X');
}
return(
<button className='square' onClick={onSquareClick}>{value}</button>
)
}
function calculateWinner(squares){
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

  ];
  for (let i=0; i < lines.length; i++){
    const [a,b,c] = lines[i];
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return
    }
  }
  }


 function Board(xIsNext,squares,onPlay){
  const winner = calculateWinner(squares);
  
  
  function handleClick(i){

    if (calculateWinner(squares) || squares[i]){
      return;
    }
    const nextSquares = squares.slice()
    if (xIsNext){
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
    
  }
  return(
  <>
  <div className='status'>{winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`}</div>
  <div className='board-row'>
    <Square value={squares[0]} onSquareClick = { () => handleClick(0)}/>
    <Square value={squares[1]} onSquareClick = { () => handleClick(1)}/>
    <Square value={squares[2]} onSquareClick = { () => handleClick(2)}/>
  </div>
  <div className='board-row'>
    <Square/>
    <Square/>
    <Square/>
  </div>
  <div className='board-row'>
    <Square/>
    <Square/>
    <Square/>
  </div>
  </>
  );
  }



  export default function App(){
    const [xIsNext,setXIsNext] = useState(true);
  const[history,setHistory] = useState(Array(9).fill(null));
  const currentSquares = history[history.length -1];

  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  
  }
  const moves = history.map ((squares, move) =>{
    let description;
    if( move>0){
      description = 'Ir a la jugada #'+ move;
    } else{
      description ='Ir al inicio del juego';
    }
    return(
      <li key={move}>
        <button onClick={()=> jumpTo(move)}>{description}</button>
      </li>
    )
  });
  
  return(<div className='game'>
    <div className='game-board'>
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={currentSquares} />
    </div>
  </div>
  );


}
function jumpTo(){}
// export default function App() {

// 2  const  [index,setIndex] = useState(0);
//   function handleClick(){
//     if(index === sculptureList.length - 1){
//       setIndex(0);}
//       else{
//     setIndex(index+1);}
//   }
//   function handleClickPrev(){
//     if(has){
//       setIndex(sculptureList.length - 1);}
//       else{
//     setIndex(index-1);}
//   }
 
//   let  sculpture= sculptureList[index];
//  return (
//    <div className='Barraherramientas' onClick={() => {alert('Tonoto')}}>
//     <Boton onClick={()=>{
//       alert('Tonoto botgon1')}}>Boton 1</Boton>
   
//     <Boton onClick={()=>{
//       alert('Tonoto botgon2')}}>Boton 2</Boton>
    
//    </div>

/* <>
<button onClick={handleClick}>Siguiente</button>
<h2><i>{sculptureList.name}</i>por{sculptureList.artist}</h2>
 
<h3>({index + 1} de {sculptureList.length})</h3>
<img src={sculpture.url} alt={sculpture.alt}/>
<p>{sculpture.description}</p>
</> */
 
 
