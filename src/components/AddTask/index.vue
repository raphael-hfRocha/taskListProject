<template>
  <div>
    <input v-model="description" type="text" placeholder="nova tarefa" />
    <button @click="taskAdded">+</button>
  </div>
</template>

<script>
import bus from "@/bus";

export default {
  name: "AddTask",
  data() {
    return {
      tasks: [],
      description: "",
    };
  },
  methods: {
    taskAdded() {
      this.tasks.push(this.description);
      bus.setTask(this.tasks);
      this.description = "";
    },
  },
};
</script>

<style scoped>
input {
  width: 80%;
  background-color: transparent;
  padding: 12px 20px;
  border: 2px solid white;
  border-radius: 5px;
  margin: 8px 0;
  color: white;
  box-sizing: border-box;
}
button {
  background-color: #4c93af;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 28px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>