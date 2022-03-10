<template>
  <div :class="`head ${background}`">
    <div class="head__links">
      <nuxt-link to="/shop">
        <button>
          <h1>{{ c.header.title }}</h1>
        </button>
      </nuxt-link>
     <nuxt-link to="/checkout/cart"><Cart /></nuxt-link> 
    </div>
    <hr class="head__line" />
  </div>
</template>

<script>
import c from "../content/text.json";
import Cart from "./Cart.vue";
export default {
  components: { Cart },
  data() {
    return {
      c,
    };
  },
  computed: {
    background() {
      return +this.$route.params.slug > 0 || this.$nuxt.$route.path === "/shop"
        ? "background-color"
        : "background-transparent";
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/scss/variables.scss" as v;
@use "../assets/scss/mixins.scss" as m;

.background-transparent {
  background-color: transparent;
  position: absolute;
}

.background-color {
  background-color: v.$backgroundColor;
  position: fixed;
}

.head {
  width: 100%;
  top: 0;
  display: flex;
  flex-direction: column;

  &__links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      background: none;
      border: none;
      cursor: pointer;
      margin: 0;
    }
    h1 {
      margin: 0.8rem;
      font-family: Lato, sans-serif;
      font-size: 1.5rem;
      font-weight: 300;
      color: v.$black;
      @include m.flexLayout(row, center, flex-start);
    }
  }

  &__line {
    color: v.$black;
  }
}
</style>