import {Square} from "../Square/index.js";

export const Board = ({xIsNext, squares, onPlay, winner}) => {
    const handleClick = (i) => {
        if (squares[i] || winner){
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext){
            nextSquares[i] = 'X';
        } else{
            nextSquares[i] = 'O';
        }
        onPlay(nextSquares)
    }

    let isWinner;
    const squaresColour = (x) =>{
        if (winner && (x === winner[0] || x === winner[1]|| x === winner[2])){
            isWinner = true;
        } else if (winner && (x !== winner[0] || x !== winner[1]|| x !== winner[2])){
            isWinner = false;
        }
        return isWinner;
    }

    let row = [];
    let rows = Array(3);

    for (let i = 0; i < rows.length; i++){
        for (let x = 0; x < squares.length; x++){

            row.push(<Square value={squares[x]} onSquareClick={() => handleClick(x)} isWinner={squaresColour(x)}/>)
            if (x === 2 || x === 5 || x === 8){
                rows.push(<div className="board-row">{row}</div>);
                rows.shift();
                row = [];
            }
        }
        console.log(winner)
        return rows;
    }
    return (
        <>
            {rows}
        </>
    )
};
