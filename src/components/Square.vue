<script setup>
import {computed} from 'vue'

const props= defineProps(['isSelected','updateBoard','index']);

const className=computed(() => {
    return `square ${props.isSelected ? 'is-selected' : ''}`
})

const handleClick = () => {
    // console.log(props.index);
    props.updateBoard(props.index)
}

</script>

<template>
    <div @click="handleClick" :class="className">
        <slot>
        </slot>
    </div>
</template>