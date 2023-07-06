<template>
  <header>
    <nav>
      <ul>
        <li><router-link to="/">Cuaca</router-link></li>
        <li><router-link to="/stopwatch">Stopwatch</router-link></li>
        <li><router-link to="/lokasi">Lokasi</router-link></li>
        <li><router-link to="/klikcepat">Klik Cepat</router-link></li>
        <li><router-link to="/foto">Foto</router-link></li>
      </ul>
    </nav>
  </header>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header {
  background: none;
  padding: 10px;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

nav li {
  display: inline-block;
  margin-right: 10px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
  display: inline-block;
}

nav a.router-link-exact-active {
  color: white;
  background: rgba(255, 0, 0, 0.75);
}

body {
  background-image: url("https://images5.alphacoders.com/119/thumb-1920-1198137.jpg");
  background-size: 100% 100%;
  background-attachment: fixed;
}
</style>
