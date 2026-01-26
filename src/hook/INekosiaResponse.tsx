type ImageVersion = {
  url: string;
  extension: string;
};


export interface INekosiaResponse {
  success: boolean;
  status: number;
  id: string;
  image: {
    original: ImageVersion;
    compressed: ImageVersion;
  };
  tags?: string[];
  rating?: "safe" | "suggestive";
  anime?: {
    title: string | null,
    character: string | null
  },
  source?: {
    url: string | null,
    direct: string | null
  },
  attribution?: {
    artist: {
      username: string | null,
      profile: string | null
    },
    copyright?: string | null
  }
}