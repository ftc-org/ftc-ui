"use client";
import { useGetEvent } from "@/api/get-events";
import Loader from "@/app/components/loader";
import { formatDate, formatTime, getFormattedDate } from "@/utils/date";
import Image from "next/image";

type Props = {
  eventId: string;
};
export function EventDetailsPage({ eventId }: Props) {
  const res = useGetEvent({ id: eventId as string });

  if (res.isLoading) {
    return (
      <div className="max-w-screen-xl mx-auto px-3 min-h-[90vh] flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto px-3">
      <div>
        <Image
          className="w-full h-[500px] object-cover rounded-xl"
          src={(res.data?.image.image as string) ?? "/images/default.jpg"}
          alt={(res.data?.image.caption as string) ?? "free the citizens"}
          width={800}
          height={400}
        />
        <br />
        <h1 className="text-lg font-bold tracking-tight lg:text-3xl text-aljazeera-red">
          {res.data?.title}
        </h1>
        <p className="my-2">{formatDate(res.data?.created_at as Date)}</p>
        <p className="mt-2">{res.data?.description}</p>
      </div>
      <hr className="my-5" />
      <div>
        {res.data && res.data.updates.length <= 0 ? (
          <div className="flex justify-center items-center">
            <p className="text-neutral-500">No Updates to display</p>
          </div>
        ) : (
          <div>
            <div>
              <div className="bg-white p-4 w-full rounded-xl">
                <div className="mt-4 relative">
                  <div className="absolute left-[5px] top-[9px] bottom-[9px] w-px bg-orange-300"></div>
                  {res.data?.updates.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start mb-8 relative"
                      id={String(item.id)}
                    >
                      <div className="absolute left-0 mt-2">
                        <div className="size-[10px] bg-orange-500 rounded-full ring-4 ring-orange-200"></div>
                      </div>
                      <div className="ml-8">
                        <span className="text-sm text-gray-600 font-bold block">
                          {getFormattedDate(item.created_at)}
                        </span>
                        <span className="text-sm text-gray-500 font-medium">
                          {formatDate(res.data?.created_at as Date)} :{" "}
                          {formatTime(item.created_at)}
                        </span>
                        <h1 className="text-lg font-bold tracking-tight lg:text-xl mt-2 mb-[0.5]">
                          {item.summary}
                        </h1>
                        <p>{item.content}</p>
                        <div className="grid grid-cols-4 my-5">
                          {item.images.map((image, index) => {
                            return (
                              <div key={index}>
                                <Image
                                  className="w-full h-[250px] object-cover rounded-xl"
                                  src={
                                    (image.image as string) ??
                                    "/images/default.jpg"
                                  }
                                  alt={
                                    (image.caption as string) ??
                                    "free the citizens"
                                  }
                                  width={800}
                                  height={400}
                                />
                                <p className="text-sm text-gray-500 font-medium">
                                  {image.caption}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="absolute left-0 bottom-0">
                    <div className="size-[10px] bg-orange-500 rounded-full ring-4 ring-orange-200"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
