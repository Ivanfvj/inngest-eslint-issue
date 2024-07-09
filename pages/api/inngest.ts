import { serve } from "inngest/next";

import client from "@/modules/inngest/client";
import functions from "@/modules/inngest/functions";

// Create an API that serves zero functions
export default serve({
  client: client,
  functions,
});
