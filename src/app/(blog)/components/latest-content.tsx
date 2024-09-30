"use client";
import React from "react";
import { PostCard } from "./post-card";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useGetEvents } from "@/api/get-events";
import { useGetPosts } from "@/api";

export function LatestContent({ type }: { type: "Events" | "Posts" }) {
  const { events } = useGetEvents({});
  const { posts } = useGetPosts();

  const content = type === "Events" ? events : posts;

  return (
    <div>
      <div className='flex items-center justify-between mb-3'>
        <h1 className='text-aljazeera-red text-xl font-medium'>
          Latest {type}
        </h1>
        {content
          ? content?.length > 4 && (
              <div className='text-aljazeera-red text-xl font-medium flex items-center gap-1'>
                <Link href={`/${type}`}>
                  <span>View more</span>
                </Link>{" "}
                <ChevronRight />
              </div>
            )
          : null}
      </div>
      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {content?.slice(0, 4).map((item, index) => (
          <li key={index} className='list-none'>
            <PostCard key={index} item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
