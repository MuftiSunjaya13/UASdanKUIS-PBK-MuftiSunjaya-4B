<template>
  <div class="widget-game">
    <h2>GAME KLIK CEPAT!</h2>
    <div v-if="!gameStarted">
      <button @click="startGame" class="mulai">Mulai</button>
    </div>
    <div v-else>
      <p>Klik sebanyak mungkin dalam 20 detik!</p>
      <p>Sisa Waktu: {{ remainingTime }} detik</p>
      <button @click="handleClick" :disabled="!gameActive" class="click">Klik!</button>
      <p>Skor: {{ score }}</p>
      <button @click="resetGame">Reset</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gameStarted: false,
      gameActive: false,
      score: 0,
      timer: null,
      remainingTime: 20
    };
  },
  methods: {
    startGame() {
      this.gameStarted = true;
      this.gameActive = true;
      this.score = 0;
      this.remainingTime = 20;
      this.timer = setInterval(() => {
        this.remainingTime--;
        if (this.remainingTime === 0) {
          clearInterval(this.timer);
          this.gameActive = false;
        }
      }, 1000);
    },
    handleClick() {
      if (this.gameActive) {
        this.score += 1;
      }
    },
    resetGame() {
      this.gameStarted = false;
      this.gameActive = false;
      this.score = 0;
      this.remainingTime = 20;
      clearInterval(this.timer);
    }
  }
};
</script>

<style scoped>
.widget-game {
  border: 0px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
  margin: 0 auto;
  width: 100%;
  max-width: 500px;
  margin-top: 30px;
  background-color: rgb(0,0,0,0.5);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  padding-bottom: 60px;
  padding-top: 40px;
  color: #c4bfd2;
  text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.7);
}

.mulai {
  margin-top: 30px;
}

.click {
  font-size: 60px;
}

button {
  padding: 10px 20px;
  background-color: #394dbd;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 3px;
}

button:hover {
  background-color: #0f28b0;
}

button:disabled {
  background-color: #ccc;
  color: #4c4c4c;
  cursor: not-allowed;
}
</style>