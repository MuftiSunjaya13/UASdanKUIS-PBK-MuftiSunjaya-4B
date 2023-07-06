<template>
  <div class="photo-widget">
    <h2>{{ title }}</h2>
    <img :src="photoUrl" :alt="title" class="photo-widget-image"/>
    <button @click="getRandomPhoto">Load New Photo</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      photoUrl: '',
    };
  },
  mounted() {
    this.getRandomPhoto();
  },
  methods: {
    async getRandomPhoto() {
      try {
        const apiKey = '38037020-2c48722c03be8437a05b588e6';
        const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=nature&image_type=photo&orientation=horizontal`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        const randomIndex = Math.floor(Math.random() * data.hits.length);
        const randomPhoto = data.hits[randomIndex];

        this.title = randomPhoto.tags;
        this.photoUrl = randomPhoto.webformatURL;
      } catch (error) {
        console.error('Error fetching random photo:', error);
      }
    },
  },
};
</script>

<style scoped>
.photo-widget {
  border: 0px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #e7e7e7;
  text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.7);
}

.photo-widget button {
  padding: 10px 20px;
  background-color: #394dbd;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 3px;
  margin-top: 10px;
}

.photo-widget button:hover {
  background-color: #0f28b0;
}

.photo-widget-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}
</style>