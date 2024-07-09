import {
  STRIPE_CUSTOMER_SUBSCRIPTION_CREATED_EVENT_NAME,
  STRIPE_CUSTOMER_SUBSCRIPTION_UPDATED_EVENT_NAME,
  type StripeCustomerSubscriptionCreatedEvent,
  type StripeCustomerSubscriptionUpdatedEvent,
} from "@/modules/subscription";
import { encryptionMiddleware } from "@inngest/middleware-encryption";
import { EventSchemas, Inngest } from "inngest";

if (!process.env.INNGEST_EVENT_KEY) {
  throw new Error("INNGEST_EVENT_KEY is required");
}
if (!process.env.INNGEST_ENCRYPTION_KEY) {
  throw new Error("INNGEST_ENCRYPTION_KEY is required");
}

export type Events = {
  [STRIPE_CUSTOMER_SUBSCRIPTION_CREATED_EVENT_NAME]: StripeCustomerSubscriptionCreatedEvent;
  [STRIPE_CUSTOMER_SUBSCRIPTION_UPDATED_EVENT_NAME]: StripeCustomerSubscriptionUpdatedEvent;
};

const mw = encryptionMiddleware({
  key: process.env.INNGEST_ENCRYPTION_KEY,
  // Encrypt all fields
  eventEncryptionField() {
    return process.env.NODE_ENV !== "development";
  },
});

const inngest = new Inngest({
  id: process.env.INNGEST_APP_NAME || "local-app",
  eventKey: process.env.INNGEST_EVENT_KEY,
  schemas: new EventSchemas().fromRecord<Events>(),
  middleware: [mw],
});

export default inngest;
