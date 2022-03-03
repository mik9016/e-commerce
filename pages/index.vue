<template>
  <div class="parent">
    <p>Hallo</p>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>
<style lang="scss" scoped>
@use "../assets/scss/variables.scss" as v;
@use "../assets/scss/mixins.scss" as m;

.parent {
  @include m.flexLayout(column, center, center);
  p {
    color: aquamarine;
  }
}
</style>
