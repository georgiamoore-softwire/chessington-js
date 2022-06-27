import Piece from './piece';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let availableMoves = [];
        availableMoves.push(...this.getDiagonalMovement(board.findPiece(this)));
        availableMoves.push(...this.getLateralMovement(board.findPiece(this)));
        return availableMoves;
    }
}
