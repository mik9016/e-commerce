<template>
  <div class="shop">
    <Items :items="items.data" />
  </div>
</template>
<script>
export default {
  async asyncData({ $axios }) {
    // const post = await $axios.$get('https://e-commerce-backend.ddev.site/api/items')
    const items = await $axios.$get(process.env.DEV_BACKEND+"items");
    return { items };
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/scss/variables.scss" as v;
@use "../assets/scss/mixins.scss" as m;
.shop {
  background-color: v.$backgroundColor;
}
</style>