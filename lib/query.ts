import { initQueryClient } from "@ts-rest/react-query";
import { contract } from "./contract/contract";

export const client = initQueryClient(contract, {
  baseUrl: "http://localhost:3000",
  baseHeaders: {},
});
