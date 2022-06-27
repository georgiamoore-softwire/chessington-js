import Piece from './piece';
import Square from "../square";
import GameSettings from "../gameSettings";

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        // two squares in one direction, and then one more move at a 90-degree angle
        let location = board.findPiece(this)
        let availableMoves = new Array(0);

        // row - 2, col + 1
        availableMoves.push(new Square(location.row - 2, location.col + 1))
        // row - 2, col - 1
        availableMoves.push(new Square(location.row - 2, location.col - 1))

        // row + 2, col + 1
        availableMoves.push(new Square(location.row + 2, location.col + 1))
        // row + 2, col - 1
        availableMoves.push(new Square(location.row + 2, location.col - 1))

        // col - 2, row + 1
        availableMoves.push(new Square(location.row + 1, location.col - 2))
        // col - 2, row - 1
        availableMoves.push(new Square(location.row - 1, location.col - 2))

        // col + 2, row + 1
        availableMoves.push(new Square(location.row + 1, location.col + 2))
        // col + 2, row - 1
        availableMoves.push(new Square(location.row - 1, location.col + 2))

        return this.checkMoveValidity(availableMoves, board);
    }
}
