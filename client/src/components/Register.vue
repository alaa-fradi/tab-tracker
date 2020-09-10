<template>
  <div class="register">
    <h1>Register</h1>
    <input
      type="email"
      name="email"
      v-model="email"
      placeholder="email"/>
    <input
      type="password"
      name="password"
      v-model="password"
      placeholder="password"/>

    <button @click="register">Register</button>
  </div>
</template>

<script>
  import authentificationService from '@/services/authentificationService'

export default {
  name: 'Register',
  data () {
    return {
      email:'email',
      password:'password'
    }
  },
  /*watch:{ //if tbadlet 7aja dis methode sera activee
    email(value){
      console.log('email has changed',value)
    }
  },*/
  methods:{
    async register(){
      const response = await authentificationService.register({
        email: this.email,
        password : this.password
      })
      console.log(response)
    }
  },
  /*mounted(){ // fonction te5dem ba3ed wa9t mou3ayen
    setTimeout(()=>{
      this.email = 'hello world'
    },2000) //after 2sc
  }*/
}
</script>

<style scoped>

</style>
