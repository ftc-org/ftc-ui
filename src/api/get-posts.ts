import { useQuery } from "@tanstack/react-query";
import { type Post } from "@/types";
import { BASE_API_URL } from "@/constants";

export async function getPosts(): Promise<Post[] | undefined> {
  try {
    const response = await fetch(`${BASE_API_URL}/posts`);

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
