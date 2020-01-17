<template>
  <div class="signup" style="padding: 20px">
    <h1>Signup</h1>
    <div class="container">
      <div class="row mt-5">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form @submit.prevent="signup">
            <div class="form-group">
              <label for="emailField">Email address</label>
              <input v-model="email" type="email" class="form-control" id="emailField" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            
          <!--
           <div class="form-group">
              <label for="usernameField">Username</label>
              <input v-model="username" type="text" class="form-control" id="usernameField" aria-describedby="usernameHelp" placeholder="Enter Username">
            </div> 
          -->


            <div class="form-group">
              <label for="passwordField">Password</label>
              <input v-model="password" type="password" class="form-control" id="passwordField" placeholder="Password">
            </div>
            <div class="form-group">
              <label for="confirmPasswordField">Confirm Password</label>
              <input v-model="passwordConfirmation" type="password" class="form-control" id="confirmPasswordField" placeholder="Confirm password">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template> 



<script>
export default {
  data () {
    return {
      email: "",
      //username: "",
      password: "",
      passwordConfirmation: ""
    }
  },
  methods: {
    signup () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).catch(function(error) {
        console.log(error);
      });
    }
  }
}
</script>

