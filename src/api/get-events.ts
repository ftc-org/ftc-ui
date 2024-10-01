import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { TEvent } from "@/types";
import { BASE_API_URL } from "@/constants";

export async function getEvents(
  isLive?: boolean
): Promise<TEvent[] | undefined> {
  try {
    let endpoint = `${BASE_API_URL}/events`;

    if (isLive) {
      endpoint += `?query_params=is_live`;
    }

    const response = await axios.get(endpoint);

    return response.data.results;
  } catch (error) {
    console.error("Failed to fetch events:", error);
    return;
  }
}
export async function getEventById(id: string): Promise<TEvent | undefined> {
  try {
    const endpoint = `${BASE_API_URL}/events/${id}`;

    const response = await axios.get(endpoint);

    return response.data;
  } catch (error) {
    console.error("Failed to fetch event:", error);
    return;
  }
}

export function useGetEvents({ isLive }: { isLive?: boolean }) {
  const results = useQuery({
    queryKey: ["events"],
    queryFn: () => getEvents(isLive),
  });

  return {
    ...results,
    events: results.data,
  };
}

export function useGetEvent({ id }: { id?: string }) {
  const results = useQuery({
    queryKey: [`events/${id}`],
    queryFn: () => getEventById(id!),
  });

  return results
}
