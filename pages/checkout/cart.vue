<template>
  <div class="cart">
    <div class="cart__back">
      <Back />
    </div>
    <h1 v-if="loading">LOADING...</h1>
    <h1>{{ c.cart.title }}</h1>
    <hr />
    <CartItem
      v-for="(item, idx) in this.$store.getters.cartGetter"
      :key="idx"
      :title="item.title"
      :price="item.price"
      :current-idx="idx"
      @itemPrice="addToPrices($event, idx)"
    />
    <hr />
    <div class="cart__total">
      <p>{{ c.cart.total }}:</p>
      <p>{{ total }} €</p>
    </div>
    <div class="cart__button">
      <Button :title="c.cart.goToPayment" @click.native="buy()" />
    </div>
  </div>
</template>

<script>
import c from "~/content/text.json";

export default {
  data() {
    return {
      c,
      prices: [],
      total: 0,
      loading: false,
    };
  },
  mounted() {
    this.stripe = Stripe(process.env.STRIPE_PUBLISHABLE_KEY);
  },
  methods: {
    addToPrices(val, idx) {
      const prices = [];
      this.$store.state.cart.forEach((el) => {
        prices.push(el.price * el.quantity);
      });
      const total = prices.reduce((a, b) => {
        return a + b;
      });
      this.total = total;
    },

    async buy() {
      const checkoutItems = [...this.$store.getters.cartGetter];
      this.loading = true
      await this.$axios
        .post("https://e-commerce-backend.ddev.site/api/checkout", {
          cartItems: checkoutItems,
        })
        .then((res) => {
          console.log(res);
          this.stripe.redirectToCheckout({ sessionId: res.data.id });
          this.loading = false
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@use "~/assets/scss/variables.scss" as v;
@use "~/assets/scss/mixins.scss" as m;

.cart {
  font-family: Lato, sans-serif;
  &__back {
    display: flex;
    margin-top: v.$headerHeight;
    margin-left: 2rem;
  }
  h1 {
    margin-top: v.$headerHeight;
    text-align: center;
    font-size: 4rem;
    font-weight: 300;
  }
  &__total {
    display: flex;
    justify-content: flex-end;
    gap: 2rem;
    margin: 0 2rem;
    text-transform: uppercase;
    font-weight: bold;
  }
  &__button {
    display: flex;
    margin: 2rem 2rem;
    justify-content: flex-end;
  }
}
</style>