<script setup>
import { ref, watchEffect } from 'vue'

import Square from './Square.vue'

const props = defineProps(['winner', 'resetGame'])
const winnerText = ref('')

// watch(
//     () => props.winner,
//     (newValue, oldValue) => {
//         console.log("winner", newValue)
//     },
//     { deep: true }
// )

// watchEffect(() => {
//     console.log("winner", props.winner)
// })


// console.log("winner", props.winner)

winnerText.value = props.winner === false ? "Empate" : "Ganó:"

</script>

<template>
    <section class="winner">
        <div class="text">
            <h2>{{ winnerText }}</h2>

            <header :class="{ win: props.winner }">
                <Square v-if="props.winner">{{ props.winner }}</Square>
            </header>

            <footer>
                <button @click="props.resetGame">Empezar de nuevo</button>
            </footer>
        </div>
    </section>
</template>