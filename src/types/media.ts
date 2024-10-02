export interface MediaItem {
  id: number;
  title?: string;
  type: "image" | "video";
  src:
    | string
    | {
        src: string;
        height: number;
        width: number;
      };
  description?: string;
}
