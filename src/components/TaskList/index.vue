<template>
  <div id="list">
    <div class="card" v-for="(item, index) in tasks" :key="index">
      <button>x</button>
      <p>{{ item }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListTask",
  props: {
    tasks: {
      type: Array,
      required: true
    }
  },
  methods: {
    removeTask() {
      
    }
  },
  computed: {}
};
</script>

<style scoped>
#list {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

}
.card {
  width: 450px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 57, 57, 0.938);
  border-radius: 5px;
  text-align: center;
}
button {
  border-radius: 10px;
  border: none;
  background-color: #00000046;
  color: white;
  cursor: pointer
}
</style>