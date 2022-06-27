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

    getLateralMovement(location, board) {
        let horizontal = this.getHorizontalMovement(location, board)
        let vertical = this.getVerticalMovement(location, board)

        let availableLateralMoves = new Array(0)
        availableLateralMoves.push(...horizontal, ...vertical)

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

    getHorizontalBoundaries (location, board) {
        let start = -1
        let end = GameSettings.BOARD_SIZE + 1

        while(start < 0) {
            for (let i = location.col; i > -1; i--) {
                if (typeof board.getPiece(Square.at(location.row, i)) !== "undefined"
                  && i !== location.col) {
                    start = i


                }
            }
            if (start === -1) { start = 0 }
        }
        while(end > GameSettings.BOARD_SIZE) {
            for (let i = location.col; i < GameSettings.BOARD_SIZE; i++) {

                if (typeof board.getPiece(Square.at(location.row, i)) !== "undefined"
                  && i !== location.col) {
                    end = i
                }
            }
            if (end === GameSettings.BOARD_SIZE + 1) { end = GameSettings.BOARD_SIZE }
        }

        return [start, end]
    }

    getHorizontalMovement (location, board)  {
        let availableMoves = new Array(0)
        let boundaries = this.getHorizontalBoundaries(location, board)

        for (let i = boundaries[0]; i<boundaries[1]; i++){

            if (i !== location.col) {
                // if no blocking piece in between i and location
                availableMoves.push(Square.at(location.row, i))
            }
        }

        return availableMoves
    }


    getVerticalBoundaries (location, board) {
        let start = -1
        let end = GameSettings.BOARD_SIZE + 1

        while(start < 0) {
            for (let i = location.row; i > -1; i--) {
                if (typeof board.getPiece(Square.at(i, location.col)) !== "undefined"
                  && i !== location.row) {
                    start = i

                }
            }
            if (start === -1) { start = 0 }
        }
        while(end > GameSettings.BOARD_SIZE) {
            for (let i = location.row; i < GameSettings.BOARD_SIZE; i++) {
                if (typeof board.getPiece(Square.at(i, location.col)) !== "undefined"
                  && i !== location.row) {
                    end = i
                }
            }
            if (end === GameSettings.BOARD_SIZE + 1) { end = GameSettings.BOARD_SIZE }
        }
        return [start, end]
    }

    getVerticalMovement (location, board)  {
        let availableMoves = new Array(0)
        let boundaries = this.getVerticalBoundaries(location, board)

        for (let i = boundaries[0]; i<boundaries[1]; i++){
            if (i !== location.row) {
                // if no blocking piece in between i and location
                availableMoves.push(Square.at(i, location.col))
            }
        }

        return availableMoves

    }

}
