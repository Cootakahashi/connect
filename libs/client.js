import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "english",
  apiKey: process.env.API_KEY,
});
