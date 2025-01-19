<template>
    <div>
        <h1 align="center">Tarefas</h1>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'ProgressBar',
}
</script>

<style scoped>
.progress-bar {
    width: 100%;
    height: 30px;
    border: 2px solid white;
    border-radius: 5px;
}
</style>