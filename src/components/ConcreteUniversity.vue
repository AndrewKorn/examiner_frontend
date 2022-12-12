<template>
  <div class="main">
    <div class="header">
      <button class="header-text" v-on:click="goToHomePage">Examiner</button>
    </div>

    <div class="body">
      <div class="choose-item">
        <p class="choose-text">Факультет:</p>
        <div class="choose-list">
          <button type="button" class="btn  active" data-bs-toggle="button" aria-pressed="true" v-for="faculty in faculties">{{faculty.shortName}}</button>
        </div>
      </div>

      <div class="choose-item">
        <p class="choose-text">Курс:</p>
        <div class="choose-list">
          <button type="button" class="btn  active" data-bs-toggle="button" aria-pressed="true">1 курс</button>
          <button type="button" class="btn  active" data-bs-toggle="button" aria-pressed="true">2 курс</button>
          <button type="button" class="btn  active" data-bs-toggle="button" aria-pressed="true">3 курс</button>
          <button type="button" class="btn  active" data-bs-toggle="button" aria-pressed="true">4 курс</button>
        </div>
      </div>


      <div class="choose-item">
        <p class="choose-text">Семестр:</p>
        <div class="choose-list">
          <button type="button" class="btn  active" data-bs-toggle="button" aria-pressed="true">1 семестр</button>
          <button type="button" class="btn  active" data-bs-toggle="button" aria-pressed="true">2 семестр</button>
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
  text-align: left;
  background: linear-gradient(45deg, #ec93fa, #93dbfa);
  padding-bottom: 10px;
}

.header-text {
  font-size: 35px;
  font-weight: bold;
  outline: none;
  border: none;
  background: none;
}

.choose-item {
  padding: 45px;
}

.choose-text {
  font-size: 20px;
  margin-right: 50px;
  position: relative;
  float: left;
  display: block;
}

.choose-list {
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