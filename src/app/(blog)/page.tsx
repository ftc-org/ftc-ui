import React from "react";
import LiveUpdates from "./components";

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getPosts } from "@/api";

async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  return (
    <section className='max-w-screen-xl mx-auto px-3'>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <LiveUpdates />
      </HydrationBoundary>
    </section>
  );
}

export default Home;
