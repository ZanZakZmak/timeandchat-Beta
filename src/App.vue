<template>
  <div id="app">
    <div id="nav">

      <!--

      (kopirat sa githuba od tankovića-> plan-wk7) 


        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="form-inline my-2 my-lg-0 mr-auto ml-5">
        <input v-model="searchTerm" class="form-control mr-sm-2" type="search" placeholder="Trazi nesto" aria-label="Search">
        </form>
        <router-link v-if="!authenticated" class="btn btn-info my-2 my-sm-0 mr-2" to="/login">Login</router-link>
        <span v-if="authenticated">
          {{ userEmail }}
        <a @click="logout" class="btn btn-info my-2 my-sm-0 mr-2" href="#">Logout</a>
        </span>
        <router-link v-if="!authenticated" class="btn btn-outline my-2 my-sm-0 mr-2" to="/signup">Signup</router-link>


      -->
      <!-- <div style="margin: 0 auto></div>" -->
      <router-link to="/">Home</router-link> |
      <router-link to="/userprofile">User Profile</router-link> |
      <router-link to="/yourprofile">Your Profile</router-link> |
      <router-link to="/profilescity">City Profile</router-link> |
      <!--<router-link to="/login">Login</router-link> | -->
      <router-link to="/signup">Signup</router-link> 
      
      <div style="float: right; color: white">
        <router-link v-if="!authenticated" to="/login">Login</router-link>
        <span v-if="authenticated">
          {{ userEmail }}
          <a @click.prevent="logout" href="#">| Logout</a>
        </span>
      </div>
      

    </div>
    <router-view/>
  </div>
</template>





<script type="text/javascript">
import store from '@/store.js'
export default {
  data () {
    return store;
  },
  methods: {
    logout() {
      firebase.auth().signOut()
    }
  },
  mounted () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("User is logged in with email " + user.email)
        this.authenticated = true
        this.userEmail = user.email
        //this.displayName = user.username
        //this.newBio = user.bio
        if (this.$route.name !== 'home')
          this.$router.push({name: 'home'}).catch(err => console.log(err))
      }
      else {
        console.log("User is not logged in")
        this.authenticated = false
        if (this.$route.name !== 'login')
          this.$router.push({name: 'login'}).catch(err => console.log(err))
      } 
    })
    /*db.collection(profilebio).orderBy("posted_at").limit(10)
      .onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          const data = change.doc.data()
          if (change.type !== "added") {
            return
          }
          const newBio = {
            id: change.doc.id, 
            url: data.url, 
            email: data.email, 
            bio: data.bio,
            title: 'Some title', 
            posted_at: data.posted_at, 
            //comments: data.comments
          };
          this.cards.unshift(newBio)
        });
    });*/
  }
}
</script>



-->


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // testirat sa color: black;
  color: black;
}

#nav {
  padding: 10px;
  background-color: #2c3e50;
  /*color: white;*/

  a {
    font-weight: bold;
    color: white;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
