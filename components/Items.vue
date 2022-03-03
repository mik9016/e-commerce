<template>
  <div class="items">
    <SellItemComponent
      v-for="(item, idx) in c.items"
      :key="idx"
      :picUrl="item.pic"
      :title="item.title"
      :shortDescription="item.desc"
    />
  </div>
</template>
<script>
import c from "../content/text.json";
export default {
  data() {
    return {
      c,
    };
  },
};
</script>
<style lang="scss" scoped>
@use "../assets/scss/variables.scss" as v;
@use "../assets/scss/mixins.scss" as m;
.items {
  @include m.flexLayout(row, start, center);
  flex-wrap: wrap;
  gap: 2rem;
}
</style>