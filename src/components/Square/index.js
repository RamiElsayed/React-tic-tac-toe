export const Square = ({value, onSquareClick, backgroundColor}) => {
    return (
        <button className="square" onClick={onSquareClick} style={backgroundColor}>
            {value}
        </button>
    );
};