import Piece from './piece';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        return this.checkMoveValidity(this.getDiagonalMovement(board.findPiece(this)), board)
    }
}
