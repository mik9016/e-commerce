<template>
  <div class="cart">
    <div class="cart__back">
      <Back />
    </div>
    <div v-if="loading" class="spinner">
      <div class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <h1>{{ c.cart.title }}</h1>
    <hr />
    <CartItem
      v-for="(item, idx) in this.$store.getters.cartGetter"
      :key="idx"
      :title="item.title"
      :price="item.price"
      :current-idx="idx"
      :img="item.imgUrl"
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
      this.loading = true;
      await this.$axios
        .post(process.env.PRODUCTION_BACKEND + "checkout", {
          cartItems: checkoutItems,
        })
        .then((res) => {
          console.log(res);
          this.stripe.redirectToCheckout({ sessionId: res.data.id });
          this.loading = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@use "~/assets/scss/variables.scss" as v;
@use "~/assets/scss/mixins.scss" as m;

.spinner {
  width: 100%;
  height: 100%;
  background: v.$backgroundColor;
  position: fixed;
  z-index: 999;
  @include m.flexLayout(column,center,center);
}

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
//spinner animation
.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ellipsis div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: v.$black;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}
</style>