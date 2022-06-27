import Piece from './piece';
import GameSettings from "../gameSettings";
import Square from "../square";

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let availableMoves = []
        let location = board.findPiece(this)
        let x = location.row
        let y = location.col
        for (let i = 0; i < GameSettings.BOARD_SIZE; i++) {
            for (let j = 0; j < GameSettings.BOARD_SIZE; j++) {
                if ((i !== x && j !== y)) { // check if this is the current location
                    if (((i - x === j - y) || (i - x === -(j - y)))) { // check if new coordinate is on diagonal
                        availableMoves.push(Square.at(i, j))
                    }
                }
            }
        }

        return availableMoves
    }
}
