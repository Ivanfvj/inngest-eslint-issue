import inngest from "@/modules/inngest/client";
import { STRIPE_CUSTOMER_SUBSCRIPTION_UPDATED_EVENT_NAME } from "@/modules/subscription";

const functionId = "stripe-subscription-updated";

const stripeSubscriptionUpdated = inngest.createFunction(
  { id: functionId },
  { event: STRIPE_CUSTOMER_SUBSCRIPTION_UPDATED_EVENT_NAME },
  async ({ event, step }) => {
    return event.data;
  }
);

export default stripeSubscriptionUpdated;
