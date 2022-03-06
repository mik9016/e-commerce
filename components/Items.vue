<template>
  <div class="items">
    <SellItemComponent
      class="item"
      v-for="item in items"
      :key="item.id"
      picUrl="https://picsum.photos/200/300"
      :title="item.title"
      :shortDescription="item.description"
      :price="item.price"
      @click.native="addToCart(item)"
    />
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
    };
  },
  methods: {
    //TODO move to the particular item site view
    addToCart(item) {
      this.$store.commit("addToCart",item);
    },
  },
};
</script>
<style lang="scss" scoped>
@use "../assets/scss/variables.scss" as v;
@use "../assets/scss/mixins.scss" as m;
.items {
  @include m.flexLayout(row, flex-start, center);
  flex-wrap: wrap;
  margin-top: v.$headerHeight;
  .item {
    gap: 1rem;
  }
}
</style>