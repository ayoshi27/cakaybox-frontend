import { initQueryClient } from "@ts-rest/react-query";
import { contract } from "@ayoshi27/cakaybox-contract";

export const client = initQueryClient(contract, {
  baseUrl: "/api",
  baseHeaders: {},
});
