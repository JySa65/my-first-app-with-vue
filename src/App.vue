<template>
  <div>
    <nav>
      <ul>
        <li><router-link to="/">Test</router-link> </li>
        <li><router-link to="/user">User</router-link> </li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import Test from './components/Test.vue'
import User from './components/User.vue'
export default {
  name: 'app',
  components: {
    Test,
    User
  }
}
</script>

<style lang="scss">
  
</style>
