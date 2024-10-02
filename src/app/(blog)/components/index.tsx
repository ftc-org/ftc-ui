"use client";
import React, { Fragment } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { LiveUpdateCard } from "./live-update-card";
import { PostCard } from "./post-card";

import { useGetEvents } from "@/api/get-events";
import { LatestContent } from "./latest-content";
import { ImageMasonryLayout } from "@/app/components/masonry-layout";
import { useGetPosts } from "@/api";
import { mediaItems } from "@/mocks/gallery";

function Landing() {
  const { events } = useGetEvents({ isLive: false });
  const { posts } = useGetPosts();

  return (
    <Fragment>
      <div>
        <h1 className='text-lg font-bold tracking-tight lg:text-3xl text-aljazeera-red'>
          #FreeTheCitizens
        </h1>
        <p>
          Empowering Voices, Amplifying Justice. Stay Informed with
          #FreetheCitizens.
        </p>
      </div>
      <div className='flex lg:flex-row flex-col gap-10'>
        <div className='mt-10 lg:w-6/12 w-full'>
          <LiveUpdateCard />
        </div>

        <div className='lg:w-5/12'>
          <ul className='mt-10 flex-1 grid md:grid-cols-2 grid-cols-1 h-fit gap-7'>
            {events?.map((event, index) => (
              <PostCard item={event} key={index} />
            ))}
          </ul>

          <ul className='mt-4 md:block hidden'>
            <div className='flex items-center justify-between'>
              <h1 className='my-2 text-lg'>Media</h1>
              <Link
                href='/gallery'
                className='my-2 text-lg flex items-center gap-1'
              >
                <span> See All </span>
                <ChevronRight />
              </Link>
            </div>
            <ImageMasonryLayout mediaItems={mediaItems} />
          </ul>
        </div>
      </div>

      {posts && posts?.length === 0 ? null : (
        <div>
          <LatestContent type='Posts' />
        </div>
      )}

      <div className='py-10'>
        <LatestContent type='Events' />
      </div>
    </Fragment>
  );
}

export default Landing;
