import {Board} from "../Board";

export const Index = () => {
    return (
        <div className="game">
            <div className="game-board">
                <Board />
            </div>
            <div className="game-info">
                <ol>{}</ol>
            </div>
        </div>
    )
}