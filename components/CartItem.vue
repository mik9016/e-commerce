<template>
  <div class="cartItem">
    <img
      :src="img"
      alt="pic"
      width="90"
      height="150"
    />
    <p class="cartItem__title">{{ title }}</p>
    <QuantityHandler
    
      :idx="currentIdx"
      @quantity="calculatePrice($event)"
    />
    <p>{{ calculatedPrice }}€</p>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    img: { type: String, required: true },
    price: { type: Number, required: true },
    currentIdx: { type: Number, required: false },
  },
  data() {
    return {
      calculatedPrice: this.$props.price,
    };
  },
  mounted() {
    this.emitPrice(1);
  },
  methods: {
    calculatePrice(val) {
      this.calculatedPrice = this.$props.price * +val;
      this.emitPrice(val);
    },
    emitPrice(quantity) {
      this.$emit("itemPrice", {
        price: this.$props.price,
        quantity: quantity,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/scss/variables.scss" as v;
@use "../assets/scss/mixins.scss" as m;

.cartItem {
  @include m.flexLayout(row, center, space-between);
  margin: 1rem 2rem;
  width: 60%;
  font-family: Lato, sans-serif;
  font-size: v.$cartFontSize;
  font-weight: 100;
  img {
    object-fit: cover;
  }

  &__title {
    text-transform: uppercase;
  }
}
</style>