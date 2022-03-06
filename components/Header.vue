<template>
  <div class="head">
    <nuxt-link to="/">
      <button>
        <h1>{{ c.header.title }}</h1>
      </button></nuxt-link
    >
    <hr class="head__line" />
  </div>
</template>

<script>
import c from "../content/text.json";
export default {
  data() {
    return {
      c,
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/scss/variables.scss" as v;
@use "../assets/scss/mixins.scss" as m;

.head {
  background-color: transparent;
  position: absolute;
  width: 100%;
  top: 0;
  button {
    background: none;
    border: none;
    cursor: pointer;
    margin: 0;
  }
  h1 {
    margin: 1rem;
    font-family: Lato, sans-serif;
    font-size: 1.5rem;
    color: v.$black;
    @include m.flexLayout(row, center, flex-start);
  }
  &__line {
    color: v.$black;
  }
}
</style>