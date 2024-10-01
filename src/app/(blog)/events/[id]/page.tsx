import { getEvents } from "@/api/get-events";
import { EventDetailsPage } from "@/app/components/event-details";

type Props = {
  params: {
    id: string;
  };
};
function EventPage(props: Props) {
  return <EventDetailsPage eventId={props.params.id.toString()} />;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const allEvents = await getEvents();

  if (!allEvents || allEvents.length === 0) {
    return [];
  }

  return allEvents.map((event) => ({
    id: event.id.toString(),
  }));
}

export default EventPage;
