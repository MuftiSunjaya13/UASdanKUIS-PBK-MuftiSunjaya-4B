<template>
  <div>
    <h3>Cuaca saat ini</h3>
    <input type="text" v-model="cityName" placeholder="Masukkan nama kota">
    <button class="cari" @click="fetchWeatherData">Cari</button>
    <div v-if="weatherData" class="data">
        <table>
          <tr>
            <td class="name">{{ weatherData.name }}</td>
          </tr>
          <tr>
            <td class="temp">{{ Math.round(weatherData.main.temp) }}°C</td>
          </tr>
          <tr>
            <td class="desc">{{ weatherData.weather[0].description }}</td>
          </tr>
        </table>
      </div>
    <table>
      <tr>
        <td v-if="error" class="eror">{{ error }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cityName: '',
      weatherData: null,
      error: '',
    };
  },
  methods: {
    async fetchWeatherData() {
      const apiKey = '8e2cf590b56d856c9ae1506039a390a9';

      if (!this.cityName) {
        this.weatherData = null;
        this.error = 'Masukkan nama kota';
        return;
      }

      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&units=metric&appid=${apiKey}`;
      try {
        const response = await fetch(apiUrl);
        if (response.ok) {
          const data = await response.json();
          this.weatherData = data;
          this.error = '';
        } else {
          this.weatherData = null;
          this.error = 'Terjadi kesalahan dalam memuat data cuaca';
        }
      } catch (error) {
        console.error(error);
        this.error = 'Terjadi kesalahan dalam memuat data cuaca';
      }
    },
  },
};
</script>

<style scoped>
input[type="text"] {
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.30);
}

.cari {
  padding: 10px 20px;
  background-color: #394dbd;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 3px;
}

.cari:hover {
  background-color: #282abb;
}

table {
max-width: 100%;
margin: 0 auto;
margin-top: 30px;
background-color: rgb(0,0,0,0.5);
border-top-left-radius: 15px;
border-top-right-radius: 15px;
border-bottom-left-radius: 15px;
border-bottom-right-radius: 15px;
color: white;
}
table tr td {
  padding-bottom: 20px;
  padding-left: 50px;
  padding-right: 50px;
}

.name {
  color: #FFF;
  font-size: 32px;
  font-weight: 500;
  text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.7);
  letter-spacing: 2px;
  padding-top: 20px;
}

.temp {
  color: #FFF;
  display: inline-block;
  font-size: 50px;
  font-weight: 800;
  text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.7);
}

.desc {
  color: #FFF;
  font-size: 20px;
  font-weight: 300;
  text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.7);
  letter-spacing: 2px;
}

.eror {
  color: #FFF;
  font-size: 20px;
  font-weight: 300;
  padding-top: 20px;
}
</style>