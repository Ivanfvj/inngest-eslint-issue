import Stripe from "stripe";

export const STRIPE_EVENT_PREFIX = "stripe";

export type StripeCustomerSubscriptionCreatedEvent = {
  data: Stripe.CustomerSubscriptionCreatedEvent;
};
export type StripeCustomerSubscriptionUpdatedEvent = {
  data: Stripe.CustomerSubscriptionUpdatedEvent;
};

export const CUSTOMER_SUBSCRIPTION_CREATED: Extract<
  Stripe.Event["type"],
  "customer.subscription.created"
> = "customer.subscription.created";
export const CUSTOMER_SUBSCRIPTION_UPDATED: Extract<
  Stripe.Event["type"],
  "customer.subscription.updated"
> = "customer.subscription.updated";

export const STRIPE_CUSTOMER_SUBSCRIPTION_CREATED_EVENT_NAME =
  `${STRIPE_EVENT_PREFIX}.${CUSTOMER_SUBSCRIPTION_CREATED}` as const;
export const STRIPE_CUSTOMER_SUBSCRIPTION_UPDATED_EVENT_NAME =
  `${STRIPE_EVENT_PREFIX}.${CUSTOMER_SUBSCRIPTION_UPDATED}` as const;
