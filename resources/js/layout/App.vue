<template>
   <div id="app">
      
        <nav class="navbar navbar-light bg-light">
      <div class="container-fluid justify-content-center">
             <ul class="nav nav-pills"  v-if="isLoggedIn">
            <li class="nav-item"><router-link to="/" class="nav-link" :class="{active: $route.name==='home'}"> &nbsp;Home</router-link></li>
            <li class="nav-item"><button class="nav-link" @click="logout()">Logout</button></li>
            </ul>
              <ul class="nav nav-pills" v-else>
            <li class="nav-item"><router-link to="/login" :class="{active: $route.name==='login'}" class="nav-link">Login</router-link></li>
            <li class="nav-item"><router-link to="/register" :class="{active: $route.name==='register'}" class="nav-link">Register</router-link></li>
         
            </ul>
      </div>
   </nav>

      <div class="mt-5 pt-3">
      		<router-view></router-view>
      </div>


   </div>
</template>

<script>
   export default{
   	name:"App",
      data(){
         return{
            user:''
         }
      },
   	computed : {
        isLoggedIn : function(){ 
         	return this.$store.getters.isLoggedIn
        }
      },
      created(){
         if(this.isLoggedIn){
            this.$store.dispatch('getUser');
         }
      },
      methods: {
        async logout (){
            await this.$store.dispatch('logout')
            this.$router.push('/login')
        }
      },
   }
</script>
