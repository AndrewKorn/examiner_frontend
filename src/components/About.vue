<template>
  <div class="main">
    <div class="header">
      <button class="header-text" v-on:click="goToHomePage">Examiner</button>
      <button class="header-button">Войти</button>
      <button class="header-button">Регистрация</button>
    </div>

    <div class="body">
      <h3>О нас</h3>
      <p>Эффективная подготовка к экзаменам.</p>
    </div>

  </div>
</template>

<script>
export default {
  name: "About",

  methods: {
    goToHomePage: function () {
      this.$router.push("/")
    }
  }
}
</script>

<style scoped>
.header {
  text-align: right;
  background: linear-gradient(45deg, #ec93fa, #93dbfa);
  padding-bottom: 10px;
}

.header-text {
  font-size: 35px;
  font-weight: bold;
  position: relative;
  right: 950px;
  outline: none;
  border: none;
  background: none;
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

.body {
  text-align: center;
  margin-top: 10px;
}
</style>