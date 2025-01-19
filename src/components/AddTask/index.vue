<template>
  <div class="container">
    <input
      v-model="description"
      type="text"
      placeholder="nova tarefa"
      @keyup.enter="taskAdded"
    />
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
      description: ""
    };
  },
  methods: {
    taskAdded() {
      this.tasks.push({ description: this.description, color: 'red', done: false });
      bus.setTask(this.tasks);
      this.description = "";
    },
  },
};
</script>

<style scoped>
.container {
  position: relative;
}

.container input {
  width: 80%;
  background-color: transparent;
  padding: 12px 20px;
  border: 2px solid white;
  border-radius: 5px;
  margin: 8px 0;
  color: white;
  box-sizing: border-box;
}

.container button {
  position: absolute;
  background-color: #4c93af;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  height: 43px;
  width: 50px;
  text-decoration: none;
  border: none;
  color: white;
  padding: 0 10px;
  cursor: pointer;
  font-weight: bold;
  font-size: 28px;
  margin-top: 8px;
}
</style>