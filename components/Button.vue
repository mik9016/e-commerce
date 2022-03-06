<template>
  <button>
    <p>{{ title }}</p>
  </button>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/scss/variables.scss" as v;
@use "../assets/scss/mixins.scss" as m;

button {
  width: 14rem;
  height: fit-content;
  text-align: center;
  background: transparent;
  border: 2px v.$blackest solid;
  font-family: Montserrat sans-serif;
  cursor: pointer;
  p {
    margin: 1rem;
    color: v.$blackest;
    font-size: 1rem;
  }

  &:hover {
    transition: 0.5s ease all;
    border: 2px v.$white solid;
    background-color: v.$black;
    p {
      color: v.$white;
    }
  }
}
</style>