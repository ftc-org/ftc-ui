import Image from "next/image";
import Link from "next/link";
import { Roboto } from "next/font/google";
import { Clock } from "lucide-react";

import { useMediaQuery } from "usehooks-ts";
import { type Post, type TEvent } from "@/types";
import { getFormattedDate } from "@/utils/date";

import { LiveIndicator } from "@/app/components/live-indicator";
import { truncateString } from "@/utils/functions";

type PostOrEvent = Post | TEvent;

interface PostCardProps {
  item: PostOrEvent;
}

const font = Roboto({ subsets: ["latin"], weight: "500" });

export function PostCard({ item }: PostCardProps) {
  const matches = useMediaQuery("(min-width: 768px)");

  const isEvent = (item: PostOrEvent): item is TEvent => {
    return "is_live" in item;
  };

  const truncationLength = matches ? 100 : 65;

  const renderContent = isEvent(item)
    ? truncateString(item.description, truncationLength)
    : truncateString((item as Post).content, truncationLength);

  return (
    <div className='bg-white overflow-hidden flex flex-row lg:flex-col justify-between h-full w-full rounded-b-xl rounded-tr-xl'>
      <div className='flex flex-row lg:flex-col'>
        <div className='relative lg:h-[10.5rem] h-36 lg:w-full w-[240px]'>
          <Image
            className='object-cover lg:rounded-t-xl rounded-tl-xl rounded-b-none'
            src={item?.image?.image ?? "/images/default.jpg"}
            alt={item?.image?.caption ?? 'free the citizens'}
            placeholder='blur'
            blurDataURL={item?.image?.image ?? "/images/default.jpg"}
            quality={75}
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 80vw'
          />
        </div>

        <div className='p-2.5 w-full'>
          {isEvent(item) && item.is_live && <LiveIndicator label='Live' />}

          <Link
            href='#'
            className={`mt-2 text-base font-medium ${font.className} fleap-2 hover:underline hover:text-red-500 h-28`}
          >
            <h1>{truncateString(item.title, 100)}</h1>
          </Link>
          <div className='mt-2'>
            <p className='font-light text-gray-800 text-sm'>{renderContent}</p>
          </div>
          <div className='flex justify-between items-center'>
            <span className='text-aljazeera-red text-sm mt-3 flex items-center gap-0.5'>
              <Clock className='!text-sm' height={16} />{" "}
              {getFormattedDate(item.created_at)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
