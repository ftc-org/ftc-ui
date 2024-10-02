import { getEventById } from "@/api/get-events";
import { EventDetailsPage } from "@/app/components/event-details";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};
async function EventPage(props: Props) {
  const event = await getEventById(props.params.id);

  if (!event) {
    return notFound();
  }

  return <EventDetailsPage event={event} />;
}

export default EventPage;
