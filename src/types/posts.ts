// type PostImage = {
//   image: string;
//   caption: string;
// };

export type Post = {
  id:number
  title: string;
  content: string;
  created_at: Date;
  updated_at: Date;
  author: number;
  image: string;
};
