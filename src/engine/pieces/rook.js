import Piece from './piece';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        return this.getLateralMovement(board.findPiece(this))
    }
}
