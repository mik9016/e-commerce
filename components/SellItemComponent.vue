<template>
  <div class="sell-item">
    <img :src="picUrl" alt="item-photo" width="100" height="150" />
    <h3 class="sell-item__title">{{ title }}</h3>
    <p class="sell-item__desc">{{ shortDescription }}</p>
  </div>
</template>

<script>
import c from "../content/text.json";
export default {
  props: {
    picUrl: { type: String, required: true },
    title: { type: String, required: true },
    shortDescription: { type: String, required: true },
  },
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

.sell-item {
  cursor: pointer;
  width: 20rem;
  height: fit-content;
  border: solid 1px v.$black;
  border-radius: 2rem;
  color: v.$black;
  text-align: left;

  img {
    object-fit: cover;
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
    height: 300px;
    width: 100%;
  }

  &__title {
    margin: 1rem;
    font-size: 2rem;
    font-family: Montserrat, serif;
  }
  &__desc {
    margin: 1rem;
    font-family: Lato, serif;
  }
}
</style>