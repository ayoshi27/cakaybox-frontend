import { initQueryClient } from "@ts-rest/react-query";
import { contract } from "./contract/contract";

export const client = initQueryClient(contract, {
  baseUrl: "/api",
  baseHeaders: {},
});
