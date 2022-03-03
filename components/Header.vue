<template>
  <div>
    <h1>{{ c.header.title }}</h1>
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

h1 {
  font-family: Montserrat, sans-serif;
  font-size: 4rem;
  @include m.flexLayout(row, center, center);
}
</style>