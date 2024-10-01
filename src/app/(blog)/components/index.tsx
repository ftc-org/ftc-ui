"use client";
import React, { Fragment } from "react";

import { LiveUpdateCard } from "./live-update-card";
import { PostCard } from "./post-card";

import { useGetEvents } from "@/api/get-events";
import { LatestContent } from "./latest-content";
import { useGetPosts } from "@/api";

function Landing() {
  const { events } = useGetEvents({ isLive: false });
  const { posts } = useGetPosts();

  return (
    <Fragment>
      <div>
        <h1 className="text-lg font-bold tracking-tight lg:text-3xl text-aljazeera-red">
          #FreeTheCitizens
        </h1>
        <p>
          Empowering Voices, Amplifying Justice. Stay Informed with
          #FreetheCitizens.
        </p>
      </div>
      <div className="flex lg:flex-row flex-col gap-10">
        <div className="mt-10 lg:w-6/12 w-full">
          <LiveUpdateCard />
        </div>

        <ul className="mt-10 flex-1 grid md:grid-cols-2 grid-cols-1 h-fit gap-7">
          {events?.map((event, index) => (
            <PostCard item={event} key={index} />
          ))}
        </ul>
      </div>

      {posts && posts?.length === 0 ? null : (
        <div>
          <LatestContent type="Posts" />
        </div>
      )}

      <div className="py-10">
        <LatestContent type="Events" />
      </div>
    </Fragment>
  );
}

export default Landing;
