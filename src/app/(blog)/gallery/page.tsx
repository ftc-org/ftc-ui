"use client";
/* eslint-disable @next/next/no-img-element */

import React from "react";
import { mediaItems } from "@/mocks/gallery";
import { ImageMasonryLayout } from "@/app/components/masonry-layout";

const GalleryPage = () => {
  return (
    <div className='min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8'>
      <ImageMasonryLayout
        mediaItems={mediaItems}
        showVideos={false}
        videoFrameClassName='lg:h-60 h-50'
      />
    </div>
  );
};

export default GalleryPage;
