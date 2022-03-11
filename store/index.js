// holds your root state
export const state = () => ({
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
  addProp(state, val) {
    state.test.push({ prop: val });
    console.log(state.test);
  },
  update(state) {
    state.test[0].prop++;
    state.test = [...state.test];
  },
  increaseQuantity(state, value) {
    const idx = value.idx;
    state.cart[idx].quantity++;
    state.cart = [...state.cart];
  },
  decreaseQuantity(state, value) {
    const idx = value.idx;
    state.cart[idx].quantity--;
    state.cart = [...state.cart];
  },
  addToCart(state, value) {
    state.cart.push({
      created_at: value.created_at,
      description: value.description,
      id: value.id,
      price: value.price,
      quantity: 1,
      imgUrl: value.imgUrl,
      title: value.title,
      updated_at: value.updated_at,
    });
    console.log(state.cart);
  },
  setCart(state, value) {
    state.cart = value;
  },
};
// your root getters
export const getters = {
  cartGetter(state) {
    return state.cart;
  },
  cartLengthGetter(state) {
    return state.cart.length;
  },
};
