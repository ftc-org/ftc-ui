import { useQuery } from "@tanstack/react-query";
import { TEvent } from "@/types";
import { BASE_API_URL } from "@/constants";

export async function getEvents(
  isLive?: boolean
): Promise<TEvent[] | undefined> {
  try {
    let endpoint = `${BASE_API_URL}/events`;

    if (isLive) {
      endpoint += `&is_live=true`;
    }

    const response = await fetch(endpoint);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Failed to fetch events:", error);
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
