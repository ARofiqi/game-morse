<template>
  <header>
    <router-link :to="{ name: 'homepage' }">homepage</router-link>
    <router-link :to="{ name: 'convert' }">convert</router-link>
  </header>
</template>

<style scoped lang="scss">
header {
  background: gray;
  padding: 20px 100px;

  display: flex;
  gap: 20px;

  color: white;
}

a {
  color: inherit;
}
</style>
