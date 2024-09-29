import { useQuery } from "@tanstack/react-query";
import { BASE_API_URL } from "./config";
import { Post } from "@/types";

export async function getPosts(): Promise<Post[] | undefined> {
  try {
    const response = await fetch(`${BASE_API_URL}/events`, {
      headers: {
        "ngrok-skip-browser-warning": "69420",
      },
    });

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

export function useGetPosts() {
  const results = useQuery({
    queryKey: ["posts"],
    queryFn: () => getPosts(),
  });

  return {
    ...results,
    posts: results.data,
  };
}
