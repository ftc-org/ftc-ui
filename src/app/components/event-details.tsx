"use client";
import Image from "next/image";
import { useGetEvent } from "@/api/get-events";
import Loader from "@/app/components/loader";
import type { EventImage, Update } from "@/types";
import { formatDate, formatTime, getFormattedDate } from "@/utils/date";
import { LiveIndicator } from "./live-indicator";

type Props = {
  eventId: string;
};

function UpdateItem({ item }: { item: Update }) {
  return (
    <div className='flex items-start mb-8 relative' id={String(item.id)}>
      <div className='absolute left-0 -mt-2 lg:ml-6 ml-2 flex items-center gap-2'>
        <div className='size-[10px] bg-orange-500 rounded-full ring-4 ring-orange-200'></div>
        <div className='flex gap-1'>
          <span className='text-sm text-gray-800 font-bold block'>
            {getFormattedDate(item.created_at)}
          </span>
          <span className='text-sm text-gray-600 font-light block'>
            ({formatTime(item.created_at)} GMT)
          </span>
        </div>
      </div>
      <div className='lg:ml-0 md:ml-4 ml-0 bg-white p-4 rounded-md border mt-8 w-full'>
        {/* <span className='text-sm text-gray-500 font-medium'>
          {formatDate(item.created_at)} : {formatTime(item.created_at)}
        </span> */}
        <h1 className='text-lg font-bold tracking-tight lg:text-xl mt-2 mb-[0.5]'>
          {item.summary}
        </h1>
        <p className='mt-6'>{item.content}</p>
        <div className='grid grid-cols-4 my-5'>
          {item.images.map((image: EventImage, index: number) => (
            <div key={index}>
              <Image
                className='w-full lg:h-[250px] object-cover rounded-xl'
                src={image.image ?? "/images/default.jpg"}
                alt={image.caption ?? "free the citizens"}
                width={500}
                height={300}
              />
              <p className='text-sm text-gray-500 font-medium'>
                {image.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function UpdatesList({ updates }: { updates: Update[] }) {
  if (updates.length === 0) {
    return (
      <div className='flex justify-center items-center'>
        <p className='text-neutral-500'>No Updates to display</p>
      </div>
    );
  }

  return (
    <div className='p-4 w-full rounded-md'>
      <div className='mt-4 relative w-full'>
        <div className='absolute left-[5px] top-[9px] bottom-[9px] w-px lg:ml-6 md:ml-4 ml-2 bg-orange-300'></div>
        {updates.map((item, index) => (
          <UpdateItem key={index} item={item} />
        ))}
        <div className='absolute left-0 bottom-0 lg:ml-6 ml-2'>
          <div className='size-[10px] bg-orange-500 rounded-full ring-4 ring-orange-200'></div>
        </div>
      </div>
    </div>
  );
}

export function EventDetailsPage({ eventId }: Props) {
  const { data, isLoading } = useGetEvent({ id: eventId });
  if (isLoading) {
    return (
      <div className='max-w-screen-xl mx-auto px-3 min-h-[90vh] flex justify-center items-center'>
        <Loader />
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className='max-w-screen-xl mx-auto px-3'>
      <div className='max-w-screen-xl mx-auto px-4 py-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-start'>
          <div className='space-y-4'>
            <div className='inline-flex items-center space-x-2 px-3'>
              <LiveIndicator label='Live Updates' />
            </div>
            <h1 className='text-3xl font-bold leading-tight text-gray-900'>
              {data?.title}
            </h1>
            <div className='flex gap-2'>
              <div className='h-6 bg-aljazeera-red w-[3px]' />
              <div className='flex items-center space-x-2 text-gray-700'>
                <span>By Anon</span>
                <span>{formatDate(data.created_at)}</span>
              </div>
            </div>
            <p className='mt-2'>{data.description}</p>
          </div>
          <div className='relative aspect-video'>
            <Image
              src={data?.image?.image}
              alt={data?.image?.caption}
              layout='fill'
              className='rounded-lg object-cover'
            />
          </div>
        </div>
      </div>
      {data?.updates ? (
        <div className='mb-2'>
          <span> {data?.updates?.length} Updates</span>
        </div>
      ) : null}
      <div className='h-px bg-gray-300 w-full' />
      <UpdatesList updates={data.updates} />
    </div>
  );
}
