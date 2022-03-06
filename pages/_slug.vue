<template>
  <div class="details">
    <button @click="$router.go(-1)">back</button>
    <p>{{ item.title }}</p>
    <p>{{ item.description }}</p>
    <p>{{ item.price }}</p>
    <p>{{ slug }}</p>
    <button @click="addToCart(item)">Add to cart</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
    };
  },
  methods: {
    addToCart(item) {
      this.$store.commit("addToCart", item);
    },
  },
  async asyncData({ $axios, params }) {
    const slug = params.slug; // When calling /abc the slug will be "abc"
    const response = await $axios.$get(
      `https://laravel-yu1h.frb.io/api/items/${slug}`
    );
    const item = response.data;
    return { slug, item };
  },
};
</script>
<style lang="scss" scoped>
.details {
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 14rem;
}
</style>