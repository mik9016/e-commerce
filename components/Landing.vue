<template>
  <div class="landing">
    <img
      src="../assets/images/model_hat.jpg"
      alt="model-hat-pic"
      height="100"
      width="50"
      class="landing__bigImg"
    />
    <div class="landing__right">
      <img
        src="../assets/images/model_hat.jpg"
        alt="model-hat-pic"
        height="300"
        width="150"
        class="landing__right__smallImg"
      />
      <nuxt-link to="/shop"> <Button :title="c.landing.btnText" /></nuxt-link>
    </div>
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

.landing {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: v.$backgroundColor;

  &__bigImg {
    width: 50%;
    height: 100%;
    object-fit: cover;
  }
  &__right {
    width: 50%;
    height: 100%;
    @include m.flexLayout(column, center, center);

    &__smallImg {
      width: 60%;
      height: 80%;
      object-fit: cover;
      margin-bottom: 2rem;
    }
  }
}

@media only screen and (max-width: v.$medium) {
  .landing {
    &__bigImg {
      display: none;
    }
    &__right {
      width: 100%;
    }
  }
}
</style>