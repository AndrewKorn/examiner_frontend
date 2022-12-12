<template>
  <div class="main">
    <div class="header">
      <button class="header-text" v-on:click="goToHomePage">Examiner</button>
      <button class="header-button">Войти</button>
      <button class="header-button">Регистрация</button>
    </div>

    <div class="body">
      <div class="faculties">
        <p class="faculty-text">Факультет:</p>
        <div class="faculty-list">
          <button type="button" class="btn  active" data-bs-toggle="button" aria-pressed="true" v-for="faculty in faculties">{{faculty.shortName}}</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {API_BASE_URL} from "@/main";

export default {
  name: "ConcreteUniversity",
  data() {
    return {
      universityName: "",
      faculties: []
    }
  },

  mounted() {
    fetch(API_BASE_URL + "" + this.$route.params.universityName + "/faculties")
        .then(response => response.json())
        .then(json => this.faculties = json)

  },

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

.faculties {
  padding-top: 30px;
}

.faculty-text {
  font-size: 25px;
  margin-right: 50px;
  position: relative;
  float: left;
  display: block;
}

.faculty-list {
  float: left;
  display: block;
  margin: 2px;
}

.btn {
  margin-left: 15px;
  margin-right: 15px;
  background: #ADC7FB;
  border: none;
  font-size: 20px;
}
</style>