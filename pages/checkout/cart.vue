<template>
  <div class="cart">
    <h1>{{ c.cart.title }}</h1>
    <hr />
    <!-- TODO make component to serve a list of components in cart -->
    <!-- TODO add or remove quantity -->
    <!-- TODO calculate the price  -->
    <!-- TODO Go To Adress Form -->
    {{this.$store.state.cart}}
  </div>
</template>

<script>
import c from "~/content/text.json";

export default {
  data() {
    return {
      c,
    };
  },
};
</script>

<style lang="scss" scoped>
@use "~/assets/scss/variables.scss" as v;
@use "~/assets/scss/mixins.scss" as m;

.cart {
  h1 {
    margin-top: v.$headerHeight;
    text-align: center;
    font-family: Lato, sans-serif;
    font-size: 4rem;
    font-weight: 300;
  }
}
</style>