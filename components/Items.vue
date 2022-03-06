<template>
  <div class="items">
    <SellItemComponent
      v-for="item in items"
      :key="item.id"
      picUrl="https://picsum.photos/200/300"
      :title="item.title"
      :shortDescription="item.description"
      :price="item.price"
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
  mounted() {
    console.log(this.$props.items);
  },
};
</script>
<style lang="scss" scoped>
@use "../assets/scss/variables.scss" as v;
@use "../assets/scss/mixins.scss" as m;
.items {
  @include m.flexLayout(row, flex-start, center);
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: v.$headerHeight;
}
</style>