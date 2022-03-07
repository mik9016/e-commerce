<template>
  <div class="back" @click="$router.go(-1)">
    <img src="../assets/images/arrow.svg" alt="arrow" height="15" width="15" />
    <p>{{ c.slug.backBtn }}</p>
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
};
</script>

<style lang="scss" scoped>
@use "~/assets/scss/variables.scss" as v;
@use "~/assets/scss/mixins.scss" as m;
.back {
  @include m.flexLayout(row, center, flex-start);
  width: fit-content;
  gap: 0.7rem;
  cursor: pointer;
  p {
    font-family: Lato, sans-serif;
    text-transform: uppercase;
    font-weight: 200;
    font-size: 1rem;
  }
}
</style>