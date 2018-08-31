<template>
    <div class="test">
        <h1 v-text="title"></h1>
        <h2>{{ msg }}</h2>
        <div v-if="showName">
            <p>Datos:</p>
            <ul>
                <li v-text="user.name"></li>
                <li v-text="user.last_name"></li>
                <li v-text="user.age"></li>
            </ul>
            <div>
                <p>Tareas Pendiente Por hacer</p>
                <ul>
                    <li v-for="task in tasks" :key="task.id" v-text="task.title"></li>
                </ul>
            </div>
        </div>
        <div v-else>
            <p>No Se Puede Mostrar El Nombre</p>
        </div>
        <button @click="changeState()">
            <span v-if="showName">Ocultar</span>
            <span v-else>Mostrar</span>
            </button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Hola Desde VueJs con el compnente Test.vue",
      showName: false,
      user: {
        name: "Ramon",
        last_name: "Sanchez",
        age: 20
      },
      tasks: [
        { id: 1, title: "comer" },
        { id: 2, title: "programar" },
        { id: 3, title: "dormir" },
        { id: 4, title: "seguir con el trabajo" }
      ]
    };
  },
  props:{
      msg:{
          type:String
      }
  },
  methods:{
      changeState() {
          this.showName = !this.showName
      }
  }
};
</script>

<style lang="scss" scoped>
.test{
    background-color: #eee;
}
</style>
