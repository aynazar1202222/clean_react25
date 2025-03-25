import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "46t8r4nd",
  dataset: "production",
  apiVersion: "v2025-03-24",
  useCdn: false,
});
