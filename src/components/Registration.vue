<template>
  <div class="main">
    <div class="header">
      <button class="examiner" v-on:click="goToHomePage">Examiner</button>
      <p class="have-acc">Уже есть аккаунт?</p>
      <button class="login" v-on:click="goToLoginPage">Войти -></button>
    </div>

    <div class="body">
      <div class="welcome">
        <p>Добро пожаловть в Examiner!
          Давайте учиться с нами</p>
      </div>

      <div class="inputs">
        <div class="mb-3">
          <input type="text" class="form-control" placeholder="Имя пользователя">
        </div>
        <div class="mb-3">
          <input type="text" class="enter-email form-control" placeholder="Email">
        </div>
        <div class="mb-3">
          <input type="password" class="enter-password form-control" placeholder="Пароль">
        </div><div class="mb-3">
        <input type="password" class="repeat-password form-control" placeholder="Повторите пароль">
      </div>
      </div>
    </div>

    <div class="reg">
      <button class="reg-btn">Зарегистрироваться</button>
    </div>


  </div>
</template>

<script>
export default {
  name: "Registratiion",

  methods: {
    goToHomePage: function() {
      this.$router.push("/")
    },

    goToLoginPage: function () {
      this.$router.push("/login")
    }
  }
}
</script>

<style scoped>
.main {
  background: linear-gradient(45deg, #ec93fa, #93dbfa);
  min-height: 100vh;
}

.header {
  position: absolute;
  width: 1349px;
  height: 64px;
  left: 52px;
  top: 10px;
}

.examiner {
  position: absolute;
  width: 204px;
  height: 64px;
  left: 52px;
  top: 10px;

  background: none;
  border: none;
  font-family: 'Inter';
  font-style: normal;
  font-weight: bolder;
  font-size: 36px;
  line-height: 44px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
}

.have-acc {
  background: none;
  border: none;
  position: absolute;
  width: 240px;
  height: 45px;
  left: 1105px;
  top: 10px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
}

.login {
  background: none;
  border: none;
  position: absolute;
  width: 126px;
  height: 45px;
  left: 1350px;
  top: 10px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
}

.welcome {
  position: absolute;
  width: 503px;
  height: 94px;
  left: 520px;
  top: 132px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  align-items: center;
  text-align: center;

  color: #000000;
}

.inputs {
  position: absolute;
  width: 436px;
  height: 323px;
  left: 550px;
  top: 259px;
}

.reg-btn {
  position: absolute;
  width: 255px;
  height: 47px;
  left: 640px;
  top: calc(50% - 47px/2 + 200px);

  background: #5EF4A3;
  box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
}

</style>