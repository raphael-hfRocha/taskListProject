<template>
  <div id="app">
    <ProgressBar>
      <template v-slot:default>
        <div class="progress-bar">
          <p>100%</p>
        </div>
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
          <button @click="taskRemoved(index)">x</button>
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
      selectedTask: null,
    };
  },
  methods: {
    taskRemoved(index) {
      this.tasks.splice(index, 1);
    },
    changeStatus(index) {
      if(this.tasks[index].done === false) {
        this.status = !this.status;
        this.tasks[index].color = 'green'
        this.tasks[index].done = true
      } else {
        this.status = !this.status;
        this.tasks[index].color = 'red'
        this.tasks[index].done = false
      }
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
