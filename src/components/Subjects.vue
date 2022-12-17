<template>
  <div class="main">
    <div class="header">
      <button class="header-text" v-on:click="goToHomePage">Examiner</button>
    </div>
    <div class="body">
      <div>
        <h1 style="text-align: center; padding-top: 50px">Предметы</h1>
      </div>
      <ul class="list-group">
        <li v-on:click="goToSubjectDecks(subject)" class="list-group-item" v-for="subject in this.subjects">{{subject.fullName}}</li>
      </ul>
    </div>
  </div>
</template>

<script>

import {API_BASE_URL} from "@/main";

export default {
  name: "Subjects",
  data() {
    return {
      subjects: []
    }
  },

  mounted() {
    fetch(API_BASE_URL +
        this.$route.params.universityName + "/" +
        this.$route.params.facultyName + "/" +
        this.$route.params.course + "/" +
        this.$route.params.semester + "/subjects")
        .then(response => response.json())
        .then(json => this.subjects = json)
  },

  methods: {
    goToHomePage: function () {
      this.$router.push("/")
    },

    goToSubjectDecks: function (subject) {
      this.$router.push("/" +
          this.$route.params.universityName + "/" +
          this.$route.params.facultyName + "/" +
          this.$route.params.course + "/" +
          this.$route.params.semester + "/" +
          subject.shortName + "/decks"
      )
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

.list-group {
  align-items: center;
}

.list-group-item {
  margin: 15px;
  width: 500px  ;
  text-align: center;
  background: #ADC6FB;
}
</style>