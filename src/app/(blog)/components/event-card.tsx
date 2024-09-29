import { Post } from "@/types";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import { Noto_Serif } from "next/font/google";

interface PostCardProps {
  post: Post;
}

const font = Noto_Serif({ subsets: ["latin"] });

export function PostCard({ post }: PostCardProps) {
  return (
    <div className='bg-white overflow-hidden'>
      <div className='relative h-48 w-full'>
        <Image
          className='object-cover rounded-xl'
          src={post.image?.image ?? "/images/default.jpg"}
          alt={post.image?.caption}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
      </div>
      <div className='p-4'>
        <div className='flex items-center text-sm'>
          <span className='text-red-500 font-semibold'>
            {post.is_live ? "Live Event" : "Past Event"}
          </span>
          <span className='mx-2'>•</span>
          <span className='text-gray-600'>
            {formatDistanceToNow(new Date(post.created_at), {
              addSuffix: true,
            })}
          </span>
        </div>
        <h3
          className={`mt-2 text-xl font-medium text-gray-900 ${font.className}`}
        >
          {post.title ?? "Title placeholder"}
        </h3>
        <p className='mt-2 text-gray-600 text-sm'>
          {post.description ?? "Descripttion placeholder"}
        </p>
        <div className='mt-4 flex items-center text-sm text-gray-600'>
          <span className='mx-2'>•</span>
          <span>{post.updates.length} update(s)</span>
        </div>
      </div>
    </div>
  );
}
