<template>

    <nav>
        <div class="logo">Alley~</div>
        <div class="nav">
            <router-link to="/" class="a1">Home</router-link>
            <router-link to="/two" class="a2">About</router-link>
            <router-link to="/three" class="a3">More</router-link>
        </div>
        <router-view />
    </nav>
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


.logo {
    font-size: 3.5rem;
    color: #3f7068;
    font-weight: 800;
}
</style>
