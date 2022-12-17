<template>
  <div class="main">
    <div class="header">
      <button class="header-text" v-on:click="goToHomePage">Examiner</button>
    </div>

    <div class="body">
      <div class="subject-header">
        <div class="img">
          <p class="txt">{{this.$route.params.subjectName}}</p></div>
      </div>

      <div class="decks row row-cols-1 row-cols-md-2 g-4">
        <div class="col" v-for="deck in this.decks">
          <div class="card" v-on:click="goToDeck(deck)">
            <div class="card-body">
              <h5 class="card-title" style="text-align: center">{{deck.name}}</h5>
<!--
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
-->
            </div>
          </div>
        </div>
      </div>

      <div class="add-material">
        <button class="add-btn">Добавить материал</button>
      </div>


    </div>
  </div>
</template>

<script>
import {API_BASE_URL} from "@/main";

export default {
  name: "ConcreteSubject",
  data() {
    return {
      subject : "",
      decks: []
    }
  },


  mounted() {
    const p = this.$route.params;
    fetch(API_BASE_URL + p.universityName + "/" + p.facultyName + "/" + p.course + "/" + p.semester + "/" + p.subjectName + "/decks")
        .then(response => response.json())
        .then(json => this.decks = json)

  },

  methods: {
    goToHomePage: function () {
      this.$router.push("/")
    },

    goToDeck: function (deck) {
      const p = this.$route.params;
      this.$router.push("/" + p.universityName + "/" + p.facultyName + "/" + p.course + "/" + p.semester + "/" + p.subjectName + "/" + deck.id + "/cards")
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

.subject-header {
  position: absolute;
  width: 1920px;
  height: 220px;
  left: -1px;
}

.img {
  position: absolute;
  width: 1920px;
  height: 180px;
  left: 0px;

  background: url(src/assets/subject_header.png);
}

.txt {
  position: absolute;
  width: 1920px;
  height: 216px;
  left: 680px;
  top: 0;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 64px;
  line-height: 77px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #FFFFFF;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.decks {
  position: absolute;
  width: 1361px;
  height: 200px;
  left: 100px;
  top: 260px;
}

.card {
  background: #DEF3FF;
}

.add-btn {
  box-sizing: border-box;

  position: absolute;
  width: 440px;
  height: 65px;
  left: 550px;
  top: 650px;

  background: #8BFFC0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
}
</style>