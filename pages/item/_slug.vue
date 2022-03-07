<template>
  <div>
    <Back class="back__details" />
    <div class="details">
      <div class="details__pics">
        <img
          :src="pic"
          alt="pic"
          width="450"
          height="550"
          v-for="(pic, idx) in pics"
          :key="idx"
        />
      </div>
      <div class="details__right">
        <div class="details__right__text">
          <h1>{{ item.title }}</h1>
          <h1>{{ item.price }}€</h1>
        </div>
        <div class="details__right__desc">
          <h2>{{ item.description }}</h2>
        </div>
        <Button
          @click.native="addToCart(item)"
          :title="c.slug.btnText"
          width="long"
        />
      </div>
    </div>
  </div>
</template>

<script>
import c from "~/content/text.json";

export default {
  data() {
    return {
      c,
      pics: [
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/300",
      ],
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
@use "~/assets/scss/variables.scss" as v;
@use "~/assets/scss/mixins.scss" as m;

.back__details {
  margin-left: 2rem;
  margin-top: v.$headerHeight;
}
.details {
  display: flex;
  &__pics {
    margin-top: calc(v.$headerHeight/3);
    width: 65%;
    height: fit-content;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 1rem;
  }
  &__right {
    width: 35%;
    margin-top: calc(v.$headerHeight/3);
    margin-right: 2rem;
    position: fixed;
    right: 0;
    font-family: Lato, sans-serif;

    &__text {
      display: flex;
      font-weight: 400;
      font-size: 2rem;
      justify-content: space-between;
      text-transform: uppercase;
    }
    &__desc {
      margin: 2rem 0;
      font-weight: 300;
      font-size: 1.2rem;
      text-align: left;
      width: 80%;
    }
  }
}
</style>