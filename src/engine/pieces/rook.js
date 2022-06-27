import Piece from './piece';
import Player from "../player";
import Square from "../square";
import GameSettings from '../gameSettings';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let availableMoves = []
        let location = board.findPiece(this)
        for (let i = 0; i < GameSettings.BOARD_SIZE; i++){
            if (i !== location.col) {
                availableMoves.push(Square.at(location.row, i))
            }
            if (i !== location.row) {
                availableMoves.push(Square.at(i, location.col))
            }
        }
        return availableMoves
    }
}
