"use client";
import { useGetEvent } from "@/api/get-events";
import Loader from "@/app/components/loader";
import { getFormattedDate } from "@/utils/date";
import { useParams } from "next/navigation";

function EventDetailsPage() {
  const { id } = useParams();
  const res = useGetEvent({ id: id as string });

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
        <h1 className="text-lg font-bold tracking-tight lg:text-3xl text-aljazeera-red">
          {res.data?.title}
        </h1>
        <p>{res.data?.description}</p>
      </div>
      <hr className="my-5" />
      <div>
        {res.data && res.data.updates.length <= 0 ? (
          <div className="flex justify-center items-center">
            <p className="text-neutral-500">No Updates to display</p>
          </div>
        ) : (
          <div>
            <h1 className="text-lg font-bold tracking-tight lg:text-xl text-aljazeera-red">
              Updates
            </h1>
            <br />
            <div>
              <div className="bg-white p-4 w-full rounded-b-xl">
                <div className="mt-4 relative">
                  <div className="absolute left-[5px] top-[9px] bottom-[9px] w-px bg-orange-300"></div>
                  {res.data?.updates.map((item, index) => (
                    <div key={index} className="flex items-start mb-5 relative">
                      <div className="absolute left-0 mt-2">
                        <div className="size-[10px] bg-orange-500 rounded-full ring-4 ring-orange-200"></div>
                      </div>
                      <div className="ml-8">
                        <span className="text-sm text-gray-600 font-medium">
                          {getFormattedDate(item.created_at)}
                        </span>
                        <p>{item.content}</p>
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

export default EventDetailsPage;
