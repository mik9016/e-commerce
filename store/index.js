// holds your root state
export const state = () => ({
  counter: 0,
  cart: [],
});

// contains your actions
export const actions = {
  counterUp({ state, commit }) {
    commit("setCounter", state.counter + 1);
  },
};
// contains your mutations
export const mutations = {
  setCounter(state) {
    state.counter++;
  },
  addToCart(state, value) {
    state.cart.push(value);
  },
};
// your root getters
export const getters = {
  myGetter(state) {
    return state.counter + 1000;
  },
  cartGetter(state) {
    return state.cart;
  },
  cartLengthGetter(state) {
    return state.cart.length;
  },
};
