<template>
  <div class="main">
    <div class="header">
      <button class="header-text" v-on:click="goToHomePage">Examiner</button>
    </div>

    <div class="body">
      <div class="choose-item">
        <p class="choose-text">Факультет:</p>
        <div class="choose-list">
          <button v-on:click="changeFaculty(faculty.shortName)" type="button" class="btn  active" data-bs-toggle="button" aria-pressed="true" v-for="faculty in faculties">{{faculty.shortName}}</button>
        </div>
      </div>

      <div class="choose-item">
        <p class="choose-text" style="padding-right: 55px">Курс:</p>
        <div class="choose-list">
          <button v-on:click="changeCourse(1)" type="button" class="btn  active" data-bs-toggle="button" aria-pressed="true">1 курс</button>
          <button v-on:click="changeCourse(2)" type="button" class="btn  active" data-bs-toggle="button" aria-pressed="true">2 курс</button>
          <button v-on:click="changeCourse(3)" type="button" class="btn  active" data-bs-toggle="button" aria-pressed="true">3 курс</button>
          <button v-on:click="changeCourse(4)" type="button" class="btn  active" data-bs-toggle="button" aria-pressed="true">4 курс</button>
        </div>
      </div>


      <div class="choose-item">
        <p class="choose-text" style="padding-right: 15px">Семестр:</p>
        <div class="choose-list">
          <button v-on:click="changeSemester(1)" type="button" class="btn  active" data-bs-toggle="button" aria-pressed="true">1 семестр</button>
          <button v-on:click="changeSemester(2)" type="button" class="btn  active" data-bs-toggle="button" aria-pressed="true">2 семестр</button>
        </div>
      </div>


      <div class="subjects-button">
        <button v-on:click="goToSubjects" type="submit" class="btn btn-success mb-3 btn-success">Показать предметы</button>
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
      faculties: [],
      faculty: "",
      course: "",
      semester: "",
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
    },

    changeFaculty: function (faculty) {
      this.faculty = faculty
    },

    changeCourse: function (course) {
      this.course = course
    },

    changeSemester: function (semester) {
      this.semester = semester
    },

    goToSubjects: function () {
      if (this.faculty !== "" && this.course !== "" && this.semester !== "") {
        this.$router.push("/" + this.$route.params.universityName + "/" + this.faculty + "/" + this.course + "/" + this.semester + "/subjects")
      }
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

.active {
  margin-left: 15px;
  margin-right: 15px;
  background: #ADC7FB;
  border: none;
  font-size: 20px;
}
.btn-success {
  position: absolute;
  top: 500px;
  font-size: 30px;
  left: 620px;
}



</style>