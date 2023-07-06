<template>
  <div class="widget">
    <h3>Stopwatch</h3>
    <h2>{{ formatTime }}</h2>
    <div>
      <button @click="startStopwatch" :disabled="isRunning">Start</button>
      <button @click="stopStopwatch" :disabled="!isRunning">Stop</button>
      <button @click="resetStopwatch">Reset</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      startTime: null,
      currentTime: null,
      isRunning: false,
    };
  },
  computed: {
    elapsedTime() {
      if (this.startTime && this.currentTime) {
        return this.currentTime - this.startTime;
      }
      return 0;
    },
    formatTime() {
      const hours = Math.floor(this.elapsedTime / 3600000);
      const minutes = Math.floor(this.elapsedTime / 60000) % 60;
      const seconds = Math.floor((this.elapsedTime % 60000) / 1000);
      const milliseconds = Math.floor((this.elapsedTime % 1000) / 10);

      return `${this.padTime(hours)}:${this.padTime(minutes)}:${this.padTime(seconds)}:${this.padTime(milliseconds)}`;
    },
  },
  methods: {
    padTime(time) {
      return time.toString().padStart(2, '0');
    },
    startStopwatch() {
      this.startTime = Date.now() - this.elapsedTime;
      this.isRunning = true;
      this.updateTime();
    },
    stopStopwatch() {
      this.isRunning = false;
    },
    resetStopwatch() {
      this.isRunning = false;
      this.startTime = null;
      this.currentTime = null;
    },
    updateTime() {
      if (this.isRunning) {
        this.currentTime = Date.now();
        requestAnimationFrame(this.updateTime);
      }
    },
  },
};
</script>

<style scoped>
.widget {
  border: 0px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
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
