<template>
<div>
  {{ isLoggedIn }}
  {{user}}
</div>
</template>

<script>
export default {
  name: "UserPage",
  computed: {
    user(){
      return this.$store.getters.user
    },
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init(){
      this.$store.dispatch('GET_USER')
    }
  }
}
</script>

<style scoped>

</style>