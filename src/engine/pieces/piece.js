import GameSettings from "../gameSettings";
import Square from "../square";

export default class Piece {
    constructor(player) {
        this.player = player;
    }

    getAvailableMoves(board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    moveTo(board, newSquare) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    }

    getLateralMovement(location) {
        let availableLateralMoves = []
        for (let i = 0; i < GameSettings.BOARD_SIZE; i++){
            if (i !== location.col) {
                availableLateralMoves.push(Square.at(location.row, i))
            }
            if (i !== location.row) {
                availableLateralMoves.push(Square.at(i, location.col))
            }
        }
        return availableLateralMoves
    }

    getDiagonalMovement(location){
        let availableDiagonalMoves = []
        let x = location.row
        let y = location.col

        for (let i = 0; i < GameSettings.BOARD_SIZE; i++) {
            for (let j = 0; j < GameSettings.BOARD_SIZE; j++) {
                if ((i !== x && j !== y)) { // check if this is the current location
                    if (((i - x === j - y) || (i - x === -(j - y)))) { // check if new coordinate is on diagonal
                        availableDiagonalMoves.push(Square.at(i, j))
                    }
                }
            }
        }

        return availableDiagonalMoves
    }

    checkMoveValidity (potentialMoves, board) {
        let validMoves = new Array(0)
        for (let move of potentialMoves){
            if (move.row < GameSettings.BOARD_SIZE && move.row > -1 &&
                move.col < GameSettings.BOARD_SIZE && move.col > -1 &&
                typeof board.getPiece(Square.at(move.row, move.col)) === "undefined"){
                validMoves.push(Square.at(move.row, move.col))
            }
        }
        return validMoves
    }
}
