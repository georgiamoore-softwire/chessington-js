import Piece from './piece';
import Square from "../square";
import Player from "../player";
import GameSettings from '../gameSettings';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let availableMoves = new Array(0);
        let location = board.findPiece(this)

        if (this.player === Player.WHITE){
            if (location.row === 1 && // first turn
              typeof board.getPiece(Square.at(location.row + 1,location.col)) === "undefined") { // check there is no piece in between
                availableMoves.push(Square.at(location.row + 2,location.col));
            }
            availableMoves.push(Square.at(location.row + 1,location.col));

        } else if (this.player === Player.BLACK) {
            if (location.row === GameSettings.BOARD_SIZE - 2 && // first turn
               typeof board.getPiece(Square.at(location.row - 1,location.col)) === "undefined") { // check there is no piece in between
                availableMoves.push(Square.at(location.row - 2,location.col));
            }

            availableMoves.push(Square.at(location.row - 1,location.col));
        }

        return this.checkMoveValidity(availableMoves, board)
    }
}
