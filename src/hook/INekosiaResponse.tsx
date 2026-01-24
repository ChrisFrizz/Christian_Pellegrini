export interface INekosiaResponse {
  success: boolean;
  status: number;
  id: string;
  image: {
    original: { url: string; extension: string };
    compressed: { url: string; extension: string };
  };
}