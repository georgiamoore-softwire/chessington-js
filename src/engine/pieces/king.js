import Piece from './piece';
import Square from "../square";

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const directions = [
            [1, 0],
            [-1, 0],
            [1, -1],
            [-1, -1],
            [0, 1],
            [0, -1],
            [1, 1],
            [-1, 1]
        ]
        let location = board.findPiece(this);
        let availableMoves = new Array(0);
        for (let [dx, dy] of directions){
            availableMoves.push(new Square(location.row + dx, location.col + dy));
        }
        return availableMoves;
    }
}
