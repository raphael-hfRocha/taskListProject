<template>
  <div id="app">
    <ProgressBar>
      <template v-slot:default>
        <div class="progressBarColor" :style="progressBar"></div>
          <span>{{ width }}%</span>
      </template>
    </ProgressBar>
    <AddTask />
    <TaskList>
      <template v-slot:default>
        <div
          class="card"
          v-for="(item, index) in tasks"
          :key="index"
          :style="{ backgroundColor: item.color }"
          @click="changeStatus(index)"
        >
          <button @click="taskRemoved(index)">X</button>
          <p v-if="tasks[index].done === false">{{ item.description }}</p>
          <del v-if="tasks[index].done === true">
            <p>{{ item.description }}</p>
          </del>
        </div>
      </template>
    </TaskList>
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
      console.log(this.tasks);
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
      tasks: [],
      status: false,
      width: 0,
    };
  },
  methods: {
    taskRemoved(index) {
      this.tasks.splice(index, 1);
    },
    changeStatus(index) {
      if (this.tasks[index].done === false) {
        this.status = !this.status;
        this.tasks[index].color = "green";
        this.tasks[index].done = true;
      } else {
        this.status = !this.status;
        this.tasks[index].color = "red";
        this.tasks[index].done = false;
      }
      this.changeProgressBar();
    },
    changeProgressBar() {
      const totalTasks = this.tasks.length;
      const completedTasks = this.tasks.filter((item) => item.done).length;

      this.width = Math.round((completedTasks / totalTasks) * 100);
    },
  },
  computed: {
    progressBar() {
      return {
        width: this.width + "%",
        backgroundColor: "rgba(172, 255, 47, 0.637)",
      };
    },
  },
};
</script>

<style>
#app {
  display: block;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 240px;
}
</style>
