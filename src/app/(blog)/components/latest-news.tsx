"use client";
import React from "react";
import { PostCard } from "./event-card";
import { Post } from "@/types";

interface Props {
  posts: Post[];
}

function LatestNews({ posts }: Props) {
  return (
    <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
      {posts?.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </ul>
  );
}

export default LatestNews;
