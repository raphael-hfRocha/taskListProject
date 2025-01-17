<template>
  <div id="app">
    <ProgressBar />
    <AddTask />
    <TaskList :tasks="tasks"/>
  </div>
</template>

<script>
import bus from "@/bus";
import ProgressBar from "./components/ProgressBar/index.vue";
import AddTask from "./components/AddTask/index.vue";
import TaskList from "./components/TaskList/index.vue";

export default {
  created() {
    bus.getTask((tasks) => {
      this.tasks = tasks;
    });
  },
  name: "App",
  components: {
    ProgressBar,
    AddTask,
    TaskList,
  },
  data() {
    return {
      tasks: []
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
