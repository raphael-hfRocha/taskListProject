<template>
  <div id="list">
      <slot></slot>
      <!-- <slot name="done"></slot> -->
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.tasks)
  },
  name: "ListTask",
  computed: {},
};
</script>

<style scoped>
#list {
  width: 100%;
  height: auto;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
}
.card {
  position: relative;
  width: 450px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  text-align: center;
  margin: 20px;
}
button {
  position: absolute;
  top: 10px;
  right: 8px;
  border-radius: 10px;
  border: none;
  background-color: #00000046;
  color: white;
  cursor: pointer;
  font-size: 20px;
}
p,
del {
  font-weight: bold;
  font-size: 32px;
}
</style>