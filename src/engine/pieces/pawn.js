import Piece from './piece';
import Square from "../square";
import Player from "../player";

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let availableMoves = []
        let location = board.findPiece(this)

        if (this.player === Player.WHITE){
            availableMoves.push(Square.at(location.row + 1,location.col));
        } else if (this.player === Player.BLACK) {
            availableMoves.push(Square.at(location.row - 1,location.col));
        }
        return availableMoves
    }
}
