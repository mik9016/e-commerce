<template>
  <div>
    <h1>{{ c.cancel.text }}</h1>
    <p>{{ c.cancel.text2 }}</p>
    <nuxt-link to="/shop">
      <Button :title="c.cancel.btnText" />
    </nuxt-link>
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
div {
  @include m.flexLayout(column, center, center);
  height: 100%;
  width: 100%;
  font-family: Lato, sans-serif;

  h1 {
    margin-top: 20%;
    font-size: 5rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  p {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
}
</style>