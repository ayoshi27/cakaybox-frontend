"use client";

import { ApolloProvider } from "@apollo/client";
import apolloClient from "../../../lib/apollo";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
    </QueryClientProvider>
  );
}
