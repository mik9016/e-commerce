<template>
  <button :class="widthBtn">
    <p>{{ title }}</p>
  </button>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    width: { type: String, default: "short", required: false },
  },
  computed: {
    widthBtn() {
      return this.$props.width !== "short" ? "long" : "short";
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/scss/variables.scss" as v;
@use "../assets/scss/mixins.scss" as m;
.long {
  width: 100%;
}
.short {
  width: 14rem;
}
button {
  transition: 0.5s ease all;
  // width: 14rem;
  height: fit-content;
  text-align: center;
  background: transparent;
  border: 2px v.$blackest solid;
  cursor: pointer;
  p {
    margin: 1rem;
    color: v.$blackest;
    font-size: 0.8rem;
    font-family: Lato, sans-serif;
    font-weight: 300;
    text-transform: uppercase;
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