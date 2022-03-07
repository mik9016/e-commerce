<template>
  <div :class="`cart ${setCartVisibility()}`">
    <img src="~/assets/images/cart.svg" alt="cart" width="20" height="20" />
    <div class="cart__number">
      <p>{{ getCartLenght }}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      number: 0,
    };
  },
  computed: {
    getCartLenght() {
      return  this.$store.getters["cartLengthGetter"];
    },
  },
  methods: {
    setCartVisibility() {
      if (this.$route.name === "index") {
        return "nonvisible";
      }
      return "";
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/scss/variables.scss" as v;
@use "../assets/scss/mixins.scss" as m;

.nonvisible {
  display: none;
}
.cart {
  margin: 0.8rem 4rem;
  position: relative;
  cursor: pointer;
  &__number {
    border-radius: 50%;
    background: v.$black;
    height: 12px;
    width: 12px;
    position: absolute;
    top: 12px;
    left: 18px;
    text-align: center;
    p {
      color: v.$white;
      font-family: Lato,sans-serif;
      font-size: 8px;
      margin-top: 1px;
      margin-left: 1px;
    }
  }
}
</style>