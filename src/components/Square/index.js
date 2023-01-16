export const Square = ({value, onSquareClick, isWinner}) => {
            return (
                value && isWinner ?
                    <button className="square" onClick={onSquareClick} style={{backgroundColor: "yellow"}}>
                        {value}
                    </button> :
                    <button className="square" onClick={onSquareClick} style={{backgroundColor: "white"}}>
                        {value}
                    </button>

            );
};