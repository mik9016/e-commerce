<template>
  <div class="items">
    <nuxt-link :to="`/${slugValue}`" class="items__link">
      <SellItemComponent
        class="item"
        v-for="item in items"
        :key="item.id"
        picUrl="https://picsum.photos/200/300"
        :title="item.title"
        :shortDescription="item.description"
        :price="item.price"
        @click.native="setSlugValue(item.id)"
    /></nuxt-link>
  </div>
</template>
<script>
import c from "../content/text.json";
export default {
  props: {
    items: { type: Array, required: true },
  },
  data() {
    return {
      c,
      slugValue: "",
    };
  },
  methods: {
    setSlugValue(id) {
      this.slugValue = id;
    },
  },
};
</script>
<style lang="scss" scoped>
@use "../assets/scss/variables.scss" as v;
@use "../assets/scss/mixins.scss" as m;

.items {
  margin-top: v.$headerHeight;

  &__link {
    @include m.flexLayout(row, flex-start, center);
    flex-wrap: wrap;

    text-decoration: none;
    width: 100%;
  }
  .item {
    gap: 1rem;
  }
}
</style>