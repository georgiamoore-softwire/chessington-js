import Piece from './piece';
import Square from "../square";
import Player from "../player";

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let availableMoves = new Array(0);
        let location = board.findPiece(this)

        if (this.player === Player.WHITE){
            if (location.row === 1) { // first turn
                availableMoves.push(Square.at(location.row + 2,location.col));
            }
            availableMoves.push(Square.at(location.row + 1,location.col));
        } else if (this.player === Player.BLACK) {
            if (location.row === 6) { // first turn
                availableMoves.push(Square.at(location.row - 2,location.col));
            }
            availableMoves.push(Square.at(location.row - 1,location.col));
        }
        return availableMoves
    }
}
