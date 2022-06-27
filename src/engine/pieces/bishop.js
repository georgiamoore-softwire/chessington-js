import Piece from './piece';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        return this.getDiagonalMovement(board.findPiece(this))
    }
}
