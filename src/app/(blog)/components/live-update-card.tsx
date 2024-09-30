import Image from "next/image";
import Link from "next/link";

import { LiveIndicator } from "@/app/components/live-indicator";

import { truncateString } from "@/utils/functions";
import { useGetEvents } from "@/api/get-events";
import { type TEvent } from "@/types";
import { getFormattedDate } from "@/utils/date";

export function LiveUpdateCard() {
  const { events } = useGetEvents({ isLive: true });

  const event = events?.[0];

  return (
    <div>
      <div className='lg:w-full relative lg:aspect-[2/3] aspect-auto lg:h-96 h-60 sm:aspect-auto'>
        <Image
          className='h-auto w-full object-cover rounded-t-xl'
          src={event?.image.image as string}
          alt={(event?.image.caption as string) ?? "free the citizens"}
          fill
          sizes='(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 100vw'
        />
        <div className='absolute top-4 left-4 bg-white px-3 py-0.5 rounded-full'>
          <LiveIndicator label='Live Updates' />
        </div>
      </div>
      {event?.updates ? <UpdatesComponent updates={event?.updates} /> : null}
    </div>
  );
}

const UpdatesComponent = ({ updates }: { updates: TEvent["updates"] }) => {
  return (
    <div className='bg-white p-4 w-full rounded-b-xl'>
      <div className='mt-4 relative'>
        <div className='absolute left-[5px] top-[9px] bottom-[9px] w-px bg-orange-300'></div>
        {updates.map((item, index) => (
          <div key={index} className='flex items-start mb-5 relative'>
            <div className='absolute left-0 mt-2'>
              <div className='size-[10px] bg-orange-500 rounded-full ring-4 ring-orange-200'></div>
            </div>
            <div className='ml-8'>
              <span className='text-sm text-gray-600 font-medium'>
                {getFormattedDate(item.created_at)}
              </span>
              <Link
                href='#'
                className='text-base font-semibold mt-1 hover:underline block'
              >
                {truncateString(item.content, 65)}
              </Link>
            </div>
          </div>
        ))}
        <div className='absolute left-0 bottom-0'>
          <div className='size-[10px] bg-orange-500 rounded-full ring-4 ring-orange-200'></div>
        </div>
      </div>
    </div>
  );
};
