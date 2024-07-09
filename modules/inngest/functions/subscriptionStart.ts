import inngest from "@/modules/inngest/client";
import { STRIPE_CUSTOMER_SUBSCRIPTION_CREATED_EVENT_NAME } from "@/modules/subscription";

const functionId = "stripe-subscription-created";

const stripeSubscriptionCreated = inngest.createFunction(
  { id: functionId },
  { event: STRIPE_CUSTOMER_SUBSCRIPTION_CREATED_EVENT_NAME },
  async ({ event, step }) => {
    return event.data;
  }
);

export default stripeSubscriptionCreated;
