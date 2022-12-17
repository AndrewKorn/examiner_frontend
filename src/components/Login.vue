<template>
 <div class="main">
   <div class="body">
     <p class="login">Войти в Examiner</p>
     <div class="inputs">
       <div class="mb-3">
         <input type="text" class="form-control" placeholder="Email">
       </div>
       <div class="mb-3">
         <input type="password" class="form-control" placeholder="Пароль">
       </div>
     </div>
     <div>
       <button class="login-btn">Войти</button>
     </div>

     <div class="first-time-create-acc">
       <p class="first-time">Впервые у нас?</p>
       <button v-on:click="goToRegistrationPage" style="background: none; border: none"><p class="create-acc" > Создайте аккаунт</p></button>
     </div>

   </div>
 </div>
</template>

<script>
export default {
  name: "Login",

  methods: {
    goToRegistrationPage: function () {
      this.$router.push("/registration")
    }
  }
}
</script>

<style scoped>
.main {
  background: linear-gradient(45deg, #ec93fa, #93dbfa);
  min-height: 100vh;
}

.login {
  position: absolute;
  width: 290px;
  height: 76px;
  left: 650px;
  top: 170px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
}

.inputs {
  position: absolute;
  width: 436px;
  height: 139px;
  left: 555px;
  top: 300px;
}

.login-btn {
  position: absolute;
  width: 255px;
  height: 47px;
  left: 640px;
  top: calc(50% - 47px/2 + 96px);

  background: #5EF4A3;
  box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  font-weight: bold;
}

.first-time {
  position: absolute;
  width: 232px;
  height: 43px;
  left: 600px;
  top: 539px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
}

.create-acc {
  position: absolute;
  width: 195.08px;
  height: 43px;
  left: 790px;
  top: 539px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #0027F5;
}
</style>