<template>
  <div class="main" >
    <div class="header">
      <button class="header-button" v-on:click="goToLoginPage">Войти</button>
      <button class="header-button" v-on:click="goToRegistrationPage">Регистрация</button>
      <button class="header-button" v-on:click="goToAbout">О нас</button>
    </div>

    <div class="body">
      <strong class="examiner">Examiner</strong>
      <form class="row g-3">
        <div class="col-auto">
          <label for="input" class="visually-hidden">Email</label>
          <input type="text" class="form-control" id="input" placeholder="Email" style="width: 350px">
        </div>
        <div class="col-auto">
          <button type="submit" class="btn btn-success mb-3">Регистрация</button>
        </div>
      </form>
      <img class="logo" src="../assets/icon.png">
    </div>

  </div>
</template>


<script>

export default {
  name: "HomePage",
  components: {},

  methods: {
    goToAbout: function () {
      this.$router.push("/about")
    },

    goToRegistrationPage: function () {
      this.$router.push("/registration")
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
  text-align: right;
}

.header-button {
  font-size: 20px;
  font-weight: bold;
  outline: none;
  border: none;
  background: none;
  margin-top: 10px;
  margin-left: auto;
  margin-right: 5em;
}


.examiner {
  font-size: 80px;
  position: absolute;
  top: 200px;
  left: 200px;
}

.logo {
  position: absolute;
  top: 100px;
  left: 900px;
}

.row {
  position: absolute;
  top: 320px;
  left: 200px;
}
</style>
