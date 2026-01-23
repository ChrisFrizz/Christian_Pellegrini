export interface INekosiaResponse {
  success: boolean;
  status: number;
  id: string;
  image: {
    original: { url: string; extension: string };
    compressed: { url: string; extension: string };
  };
}

export const POPULAR_TAGS = [
  "catgirl", "foxgirl", "maid", "waifu", "neko", "cute", 
  "animal-ears", "cat-ears", "white-hair", "thigh-high-socks",
  "vtuber", "tail-with-ribbon", "school-uniform", "smile"
] as const;