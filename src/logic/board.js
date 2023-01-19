import { WINNER_COMBOS } from '../utils/constants'

export const checkWinnerFrom = (boardToCheck) => {
  //Revisamos todas las combinaciones ganadoras paraver si X u O ganó
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a] // Esto retornara ❌ u ⚪
    }
  }
  //Si no hay ganador
  return false
}

export const checkEndGame = (newBoard) => {
  //Revisamos si hay un empate
  //Si no hay más espacios vacios en el tablero
  return newBoard.every((square) => square !== null)
}
