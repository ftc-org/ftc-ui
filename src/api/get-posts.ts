import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { type Post } from "@/types";
import { BASE_API_URL } from "@/constants";

export async function getPosts(): Promise<Post[] | undefined> {
  try {
    const response = await axios.get(`${BASE_API_URL}/posts`);

    return response.data.results;
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return;
  }
}

export async function getPostById(id: string): Promise<Post | undefined> {
  try {
    const endpoint = `${BASE_API_URL}/posts/${id}`;

    const response = await axios.get(endpoint);

    return response.data;
  } catch (error) {
    console.error("Failed to fetch post:", error);
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

export function useGetPost({ id }: { id?: string }) {
  const results = useQuery({
    queryKey: [`posts/${id}`],
    queryFn: () => getPostById(id!),
  });

  return results;
}
