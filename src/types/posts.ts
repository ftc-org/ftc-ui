type PostImage = {
  image: string;
  caption: string;
};

export type Post = {
  title: string;
  content: string;
  created_at: Date;
  updated_at: Date;
  author: number;
  image: PostImage;
};
