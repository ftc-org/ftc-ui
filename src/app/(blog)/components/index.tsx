"use client";
import React, { Fragment } from "react";
import { Banner } from "./banner";
import { FeaturedEvent } from "./featured-event";
import LatestNews from "./latest-news";
import { useGetPosts } from "@/api";

function Landing() {
  const { posts } = useGetPosts();

  console.log("ALL_POSTS", posts);
  return (
    <Fragment>
      <Banner />
      <div className='mt-20'>
        <FeaturedEvent
          title='Free the citizens'
          description='wedf'
          imageUrl='/images/default.jpg'
          publishTime='2hrs'
          publisher='author'
        />
      </div>

      <div className='mt-20 py-10'>
        <div className='flex items-center justify-between my-2'>
          <h1 className='text-aljazeera-red text-xl font-medium'>
            Latest News
          </h1>
          <h1 className='text-aljazeera-red text-xl font-medium'>Sell All</h1>
        </div>
        {posts && <LatestNews posts={posts} />}
      </div>
    </Fragment>
  );
}

export default Landing;
