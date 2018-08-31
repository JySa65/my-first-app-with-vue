<template>
    <div class="users">
        <h1>Users Components</h1>
        <form method="post" @submit.prevent="addUser">
            <input type="text" v-model="newUser.name">
            <input type="email" v-model="newUser.email">
            <input type="number" v-model="newUser.age">
            <input type="checkbox" name="" id="" v-model="newUser.contacted" value="false">
            <button v-if="updateUsers" @click="updateUserSend()" type="button">Actualizar</button>
            <button v-else type="submit">Añadir</button>
            <button @click="cleanUser()" type="button">Cancelar</button>
        </form>

        <ul v-for="user in users">
            <li v-text="user.name"></li>
            <li v-text="user.email"></li>
            <li v-text="user.age"></li>
            <li>
                <button @click="deleteUser(user)">Eliminar</button>
                <button @click="updateUser(user)">Actualizar</button>
            </li>
        </ul>

    </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          name: "Ramon",
          email: "r.a.s.g65@gmail.com",
          age: 22,
          contacted: false
        },
        {
          name: "Jose",
          email: "mail.com",
          age: 25,
          contacted: false
        },
        {
          name: "Juana",
          email: "mailjuana.com",
          age: 30,
          contacted: true
        }
      ],
      newUser:{},
      updateUsers: false
    };
  },

  methods: {
      addUser() {
        const user = {
            name: this.newUser.name,
            email: this.newUser.email,
            age: this.newUser.age,
            contacted: this.newUser.contacted
        }
        this.users.push(user)
        this.newUser = {}
      },
      deleteUser(user) {
          this.users.splice(this.users.indexOf(user), 1)
      },
      updateUser(user) {
          this.newUser = user
          this.updateUsers = true
      },
      updateUserSend() {
          let position = this.users.indexOf(this.newUser,1)
          this.deleteUser(this.newUser)
          this.users.splice(position+1, 0, this.newUser)
          this.newUser = {}
          this.updateUsers = false
      },
      cleanUser() {
          this.newUser = {}
          this.updateUsers = false
        }
      }
  };
</script>

<style lang="scss" scoped>
.users {
  background-color: #bbbbbb;
}
</style>
