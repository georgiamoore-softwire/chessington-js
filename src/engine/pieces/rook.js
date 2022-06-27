import Piece from './piece';
import Player from "../player";
import Square from "../square";
import GameSettings from '../gameSettings';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        return this.getLateralMovement(board.findPiece(this))
    }
}
