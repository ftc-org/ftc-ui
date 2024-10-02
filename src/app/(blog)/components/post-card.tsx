import { Clock } from "lucide-react";
import { Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import { type Post, type TEvent } from "@/types";
import { getFormattedDate } from "@/utils/date";

import { LiveIndicator } from "@/app/components/live-indicator";
import clsx from "clsx";

type PostOrEvent = Post | TEvent;

interface PostCardProps {
  item: PostOrEvent;
  content_length?: number;
}

const font = Roboto({ subsets: ["latin"], weight: "500" });

export function PostCard({ item, content_length }: PostCardProps) {
  // const matches = useMediaQuery("(min-width: 768px)");

  const isEvent = (item: PostOrEvent): item is TEvent => {
    return "is_live" in item;
  };

  // const truncationLength = matches ? 100 : 65;
  // const headerTruncationLength = matches ? 100 : 20;

  // const renderContent = isEvent(item)
  //   ? truncateString(item.description, truncationLength)
  //   : truncateString((item as Post).content, truncationLength);

  return (
    <div className="bg-white overflow-hidden flex flex-row lg:flex-col justify-between h-full w-full rounded-b-xl rounded-tr-xl">
      <div className="flex flex-row lg:flex-col">
        <div
          className={clsx("relative h-36 lg:w-full w-[240px]", {
            "lg:h-[12.5rem]": content_length && content_length < 4,
            "lg:h-[10.5rem]": content_length && content_length > 4,
          })}
        >
          <Image
            className="object-cover lg:rounded-t-xl rounded-tl-xl rounded-b-none h-full"
            src={
              isEvent(item)
                ? item.image.image
                : item.image ?? "/images/default.jpg"
            }
            alt={
              isEvent(item)
                ? item.image.caption
                : item.title ?? "free the citizens"
            }
            // placeholder="blur"
            // blurDataURL={item?.image ?? "/images/default.jpg"}
            quality={75}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 80vw"
          />
        </div>

        <div className="px-2.5 py-5 w-full">
          {isEvent(item) && item.is_live && <LiveIndicator label="Live" />}

          <Link
            href={isEvent(item) ? `/events/${item.id}` : `/posts/${item.id}`}
            className={`mt-2 text-base font-medium ${font.className} fleap-2 hover:underline hover:text-red-500 h-28`}
          >
            <h1 className="line-clamp-1">{item.title}</h1>
          </Link>
          <div className="mt-2">
            <p className="font-light text-gray-800 text-sm line-clamp-2">
              {isEvent(item) ? item.description : item.content}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-aljazeera-red text-sm mt-3 flex items-center gap-0.5">
              <Clock className="!text-sm" height={16} />{" "}
              {getFormattedDate(item.created_at)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
