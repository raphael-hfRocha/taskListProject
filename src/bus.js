import Vue from "vue";

export default new Vue({
    methods:{ 
        setTask(task) {
            this.$emit('taskAdded', task)
        },
        getTask(callback) {
            this.$on('taskAdded', callback)
        }
    }
})