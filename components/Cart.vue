<template>
  <div class="cart">
    <img src="~/assets/images/cart.svg" alt="cart" width="20" height="20" />
    <div class="cart__number">
      <p>{{ number }}</p>
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
};
</script>

<style lang="scss" scoped>
@use "../assets/scss/variables.scss" as v;
@use "../assets/scss/mixins.scss" as m;

.cart {
  margin: 0.8rem 4rem;
  position: relative;
  &__number {
    border-radius: 50%;
    background: v.$black;
    height: 12px;
    width: 12px;
    position: absolute;
    top: 12px;
    left: 18px;
    text-align: center;
    @include m.flexLayout(row,center,center);
    p {
      color: v.$white;
      font-size: 10px;
    }
  }
}
</style>