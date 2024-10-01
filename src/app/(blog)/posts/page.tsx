"use client";
import { useGetPosts } from "@/api";
import { PostCard } from "../components/post-card";

function PostsPage() {
  const { posts } = useGetPosts();

  return (
    <div className="max-w-screen-xl mx-auto px-3 min-h-screen">
      <div>
        <h1 className="text-lg font-bold tracking-tight lg:text-3xl text-aljazeera-red">
          Posts
        </h1>
      </div>
      <br />
      <div>
        {posts && posts.length <= 0 ? (
          <div className="flex justify-center items-center">
            <p className="text-neutral-500">No Posts to display</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {posts?.map((item, index) => {
              return <PostCard item={item} key={index} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default PostsPage;
