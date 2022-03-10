<template>
  <client-only>
    <div class="quantity">
      <p @click="decreaseNum()">-</p>
      <h3>{{ num }}</h3>
      <p @click="increaseNum()">+</p>
    </div>
  </client-only>
</template>

<script>
export default {
  props: {
    idx: { type: Number, required: true },
  },
  data() {
    return {
      num: 1,
    };
  },
  mounted() {
    // Set Initial value from store
    this.setInitialQuantity();
  },
  methods: {
    setInitialQuantity() {
      // Go through cart in store and if idx in store array is the same as index in vfor set num set quantity
      const cart = [...this.$store.getters.cartGetter];
      for (const item in cart) {
        if (+item === +this.$props.idx) {
          this.num = cart[item].quantity;
        }
      }
    },
    emitQuantity() {
      this.$emit("quantity", this.num);
    },
    increaseQuantityInStore(index) {
      this.$store.commit("increaseQuantity", { idx: index });
    },
    decreaseQuantityInStore(index) {
      this.$store.commit("decreaseQuantity", { idx: index });     
    },
    increaseNum() {
      this.num++;
      this.increaseQuantityInStore(this.$props.idx);
      this.emitQuantity();
    },
    decreaseNum() {
      if (this.num > 0) {
        this.num--;
        this.decreaseQuantityInStore(this.$props.idx)
      }
      this.emitQuantity();
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/scss/variables.scss" as v;
@use "../assets/scss/mixins.scss" as m;

.quantity {
  @include m.flexLayout(row, center, center);
  font-family: Lato, sans-serif;
  font-weight: 300;
  gap: 1rem;
  h3 {
    font-size: 2rem;
  }
  p {
    cursor: pointer;
    font-size: 3rem;
  }
}
</style>