import React from "react";
import Board from "./Board";

class Game extends React.Component {
    render(){
        return (
            <div class="game">
                <div class="game-board">
                    <Board />
                </div>
            </div>
        )
    }
}

export default Game