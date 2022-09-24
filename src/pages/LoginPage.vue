<template>
<div>
  {{ isLoggedIn }}
  Login
  <button @click="login()">Login</button>
</div>
</template>

<script>
export default {
  name: "LoginPage",
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    }
  },
  methods: {
    login() {
      this.axios.post('login', {
        email: 'admin@example.com',
        password: 'secret'
      }).then(response => {
        this.$store.commit('SET_USER', response.data.user)
        this.$store.commit('SET_IS_LOGGED_IN', true)
        localStorage.setItem('token', response.data.token)
        localStorage.setItem("auth", true);
        console.log(response)
      })
    }
  }
}
</script>

<style scoped>

</style>