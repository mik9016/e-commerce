<template>
  <div>
    <Back class="back__details" />
    <div class="details">
      <div class="details__pics">
        <img :src="item.imgUrl" alt="pic" width="450" height="550" />
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
      process.env.PRODUCTION_BACKEND + `items/${slug}`
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
    @include m.flexLayout(row, center, center);
    gap: 1rem;
    img {
      object-fit: contain;
    }
  }
  &__right {
    width: 35%;
    margin-top: 4.5rem;
    margin-right: 2rem;
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
//tablets and mobile
@media only screen and (max-width: v.$medium) {
  .details {
    flex-direction: column;
    margin: 0 8px;
    &__pics {
      width: 100%;
      img{
        width: 100%;
      }
    }
    &__right {
      width: 100%;
      
    }
  }
}
</style>