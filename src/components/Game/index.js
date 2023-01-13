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
    const winnerSquaresColour = () => {

    }
    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>
    )
}