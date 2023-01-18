<script setup>
import { ref, computed } from 'vue'
import confetti from 'canvas-confetti'

import Square from './components/Square.vue'
import { TURNS } from './utils/constants'
import { checkWinnerFrom, checkEndGame } from './logic/board'

const board = ref(Array(9).fill(null))
const turn = ref(TURNS.X)
const winner = ref(false)

const resetGame = () => {
  board.value = Array(9).fill(null)
  turn.value = TURNS.X
  winner.value = false
}

const updateBoard = (index) => {
  // no actualizamos esta posición
  // si ya tiene algo
  if (board.value[index] || winner.value) return

  // Actualizamos el tablero
  // const newBoard = ref(board.value)
  board.value[index] = turn.value
  // board.value = newBoard.value

  //Cambiar el turno
  turn.value = turn.value === TURNS.X ? TURNS.O : TURNS.X
  // const newTurn = turn.value = TURNS.X ? TURNS.O : TURNS.X
  // turn.value = newTurn

  //Guardar la partida

  //Revisar si hay ganador
  const newWinner = checkWinnerFrom(board.value)
  if (newWinner) {
    confetti()
    winner.value = newWinner
  } else if (checkEndGame(board.value)) {
    winner.value = false
  }

  // console.log("En App:", index)
}

</script>

<template>
  <main class="board">
    <h1>Tres en raya</h1>
    <button @click="resetGame">Reiniciar juego</button>
    <section class="game">
      <Square v-for="(square, index) in board" :key="index" :index="index" :updateBoard="updateBoard">
        {{ square }}
      </Square>
    </section>

    <section class="turn">
      <Square :isSelected="turn === TURNS.X">{{TURNS.X}}</Square>
      <Square :isSelected="turn === TURNS.O">{{TURNS.O}}</Square>
      </section>
  </main>
</template>