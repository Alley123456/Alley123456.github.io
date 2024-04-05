<template>
  <router-view />
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

nav a {
  text-decoration: none;
  font-size: 3rem;
  color: #3f7068;
  font-weight: 400;
  padding-left: 10%;
}

nav {
  padding: 2% 14%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 13%;

}

.nav {
  font-size: 2.25rem;
}

.nav_active {
  font-weight: 550;
}

.logo {
  font-size: 3.5rem;
  color: #3f7068;
  font-weight: 800;
}
</style>
