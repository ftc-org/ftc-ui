export type Update = {
  id: number;
  summary: string;
  content: string;
  author: number;
  created_at: Date;
  updated_at: Date;
  images: EventImage[];
};

export type EventImage = {
  image: string;
  caption: string;
};

export type TEvent = {
  id: number;
  title: string;
  description: string;
  created_at: Date;
  updated_at: Date;
  author: number;
  is_live: boolean;
  updates: Update[];
  image: EventImage;
};
