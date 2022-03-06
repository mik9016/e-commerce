<template>
  <div class="sell-item">
    <img :src="picUrl" alt="item-photo" width="100" height="150" />
    <h3 class="sell-item__title">{{ title }}</h3>
    <p class="sell-item__desc">{{ shortDescription }}</p>
    <p class="sell-item__price">{{ price }}€</p>
  </div>
</template>

<script>
import c from "../content/text.json";
export default {
  props: {
    picUrl: { type: String, required: true },
    title: { type: String, required: true },
    shortDescription: { type: String, required: true },
    price: { type: Number, required: true },
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
  border: none;
  color: v.$black;
  text-align: left;
  font-size: 0.9rem;
  margin: 1rem 1.5rem;
  font-family: Montserrat, serif;

  img {
    object-fit: cover;
    height: 372px;
    width: 100%;
  }

  &__title {
    // font-family: Montserrat, serif;
    font-weight: bold;
    height: 2rem;
  }
  &__desc {
    // font-family: Lato, serif;
    height: fit-content;
    min-height: 4.5rem;
    max-height: 8rem;
  }
  &__price {
    margin-top: 0.5rem;
    font-family: Lato, serif;
  }
}
</style>