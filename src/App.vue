<template>
  <div>
    <Header />
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header.vue";
export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style scoped lang="scss">
.container {
  padding: 20px 100px;
}
</style>
