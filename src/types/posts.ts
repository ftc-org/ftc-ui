type Update = {
  summary: string;
  content: string;
  author: number;
  created_at: Date;
  updated_at: Date;
};

type PostImage = {
  image: string;
  caption: string;
};

export type Post = {
  title: string;
  description: string;
  created_at: Date;
  updated_at: Date;
  author: number;
  is_live: boolean;
  updates: Update[];
  image: PostImage;
};
