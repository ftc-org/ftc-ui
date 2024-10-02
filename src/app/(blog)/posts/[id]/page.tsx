import { getPostById } from "@/api";
import { PostDetailsPage } from "@/app/components/post-details";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

async function PostPage(props: Props) {
  const post = await getPostById(props.params.id);

  if (!post) {
    return notFound();
  }

  return <PostDetailsPage post={post} />;
}

export default PostPage;
