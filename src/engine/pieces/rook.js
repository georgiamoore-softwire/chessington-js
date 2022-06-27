import Piece from './piece';
import Square from '../square';
import GameSettings from '../gameSettings';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let lateralMoves = this.getLateralMovement(board.findPiece(this), board);
        return this.checkMoveValidity(lateralMoves, board);
    }

}
