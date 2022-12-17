<template>
  <div class="main">
    <div class="header">
      <button class="header-text" v-on:click="goToHomePage">Examiner</button>
    </div>

    <div class="body">
      <div v-for="(card,index) in this.cards">
        <div class="card mb-3" v-if="index === current">
          <div class="card-header ">{{card.question}}</div>
          <div class="card-body">
            <p class="card-text" v-if="showAnswer === true">{{card.answer}}</p>
          </div>
          <div class="card-footer">
            <button class="show-btn" v-if="showAnswer === false" v-on:click="showAnswerFunc">Показать ответ</button>
            <div class="grades" v-if="showAnswer === true">
              <button class="grade-btn" v-on:click="changeIndex">
                <img src="../assets/dont_know.png" width="50" height="50">
                <p>Не знаю</p>
              </button>
              <button class="grade-btn" v-on:click="changeIndex">
                <img src="../assets/forgot.png" width="50" height="50">
                <p>Забыл</p>
              </button>
              <button class="grade-btn" v-on:click="changeIndex">
                <img src="../assets/remember.png" width="50" height="50">
                <p>Помню</p>
              </button>
              <button class="grade-btn" v-on:click="changeIndex">
                <img src="../assets/well_know.png" width="50" height="50">
                <p>Знаю</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {API_BASE_URL} from "@/main";

export default {
  name: "ConcreteDeck",
  data() {
    return {
      cards: [],
      current: 0,
      showAnswer: false
    }
  },

  mounted() {
    const p = this.$route.params
    fetch(API_BASE_URL + p.universityName + "/" + p.facultyName + "/" + p.course + "/" + p.semester + "/" + p.subjectName + "/" + p.deckId + "/cards")
        .then(response => response.json())
        .then(json => this.cards = json)
  },

  methods: {
    goToHomePage: function () {
      this.$router.push("/")
    },

    showAnswerFunc: function () {
      this.showAnswer = true
    },

    changeIndex: function () {
      this.current = (this.current + 1) % this.cards.length
    },
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

.card {
  position: absolute;
  border-radius: 50px;
  width: 1070px;
  height: 555px;
  left: 225px;
  top: 120px;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.card-header {
  text-align: center;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  position: absolute;
  width: 1070px;
  height: 80px;
  left: 0;
  top: 0;

  background: #DEF3FF;
}

.card-text {
  text-align: center;
  position: absolute;
  width: 1070px;
  height: 400px;
  left: 0;
  top: 150px;

  color: #000000;
}

.card-footer {
  text-align: center;
  position: absolute;
  width: 1070px;
  height: 75px;
  left: 0px;
  top: 420px;
  background: none;
}

.show-btn {
  border-radius: 30px;
  font-size: 25px;
}

.grade-btn {
  width: 100px;
  border-radius: 10px;
  margin: 10px;
}
</style>