"use client";
import Image from "next/image";
import Link from "next/link";
import { Noto_Serif } from "next/font/google";
import { Clock } from "lucide-react";

interface FeaturedEventProps {
  title: string;
  description: string;
  imageUrl: string;
  publisher: string;
  publishTime: string;
}

const font = Noto_Serif({ subsets: ["latin"] });

export function FeaturedEvent({
  title,
  description,
  imageUrl,
  publishTime,
}: FeaturedEventProps) {
  return (
    <div className='bg-white'>
      <div className='flex lg:flex-row flex-col lg:gap-16 md:gap-10 gap-6'>
        <div className='sm:w-2/5 lg:w-1/2 relative aspect-[4/3] lg:h-96 sm:aspect-auto'>
          <Image
            className='h-auto w-full object-cover rounded-xl'
            src={imageUrl}
            alt={title}
            fill
            sizes='(max-width: 640px) 100vw, (max-width: 1024px) 40vw, 50vw'
          />
        </div>
        <div className='p-8 flex-1 border rounded-xl lg:h-96'>
          <div className='flex items-center gap-2'>
            <Clock className='text-gray-600' />

            <p className='text-gray-600'>{publishTime}</p>
          </div>
          <div className='mt-4'>
            <h1
              className={`text-xl font-bold text-gray-900 md:text-2xl lg:text-5xl ${font.className}`}
            >
              {title}
            </h1>
            <p className='mt-2 text-gray-600'>{description}</p>

            <Link href='#'>Read More</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
