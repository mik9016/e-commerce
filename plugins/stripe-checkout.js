import Vue from 'vue';
import { StripePlugin } from '@vue-stripe/vue-stripe';

const options = {
//   pk: process.env.STRIPE_PUBLISHABLE_KEY,
//   stripeAccount: process.env.STRIPE_ACCOUNT,
//   apiVersion: process.env.API_VERSION,
//   locale: process.env.LOCALE,
  pk: "pk_test_51KaTvQCmakaGBDkFe9LxKwrX6hYt39nDBrVN91G4GfMHsDNwcKXJyAW76qyQ8awlYa6bsWupMovqjBvfMt2EcICS00QcjZLOxi",
//   stripeAccount: process.env.STRIPE_ACCOUNT,
//   apiVersion: process.env.API_VERSION,
//   locale: process.env.LOCALE,
};

Vue.use(StripePlugin, options);