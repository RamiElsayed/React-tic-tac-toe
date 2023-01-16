import {Board} from "../Board/index.js";
import {useState} from "react";

export const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0 ;
    const currentSquares = history[currentMove];
    
    const handlePlay = (nextSquares) =>{
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }
    const jumpTo = (nextMove) => {
        setCurrentMove(nextMove);
    }

    let status;
    const winner = calculateWinner(currentSquares);
    if (winner){
        status = "winner: " + currentSquares[winner[0]];
    } else{
        status = "Next player: " + (xIsNext ? "X" : "O");
    }

    const moves = history.map((squares, move) => {
        let description;
        if (move > 0){
            description = 'Go to move #' + move;
        } else {
            description =  'Go to game start';
        }
        if(move === history.length - 1){
            return "You are at move #" + move;
        } else {
            return <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        }
    })
    return (
        <div className="game">
            <div className="game-board">
                <div className="status">{status}</div>
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} winner={winner}/>
            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>
    )
}
const calculateWinner = (squares) => {
    const lines =[
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for(let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return [a, b, c];
        }
    }
    return null;
}