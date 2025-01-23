<template>
  <div id="progress-bar">
    <h1 align="center">Tarefas</h1>
    <div class="progress-bar">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
};
</script>

<style scoped>
#progress-bar {
  position: relative;
  margin-right: 20px;
  margin-left: 20px;
}
.progress-bar {
  margin-right: 10px;
  height: auto;
  border: 2px solid white;
  border-radius: 5px;
  margin-bottom: 20px;
}
.progressBarColor {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 50px;
}
span {
  width: 100%;
  position: absolute;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  transform: translate(-50%, -145%);
  text-align: center;
}

</style>