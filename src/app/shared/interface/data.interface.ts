export interface DataResponse {
  characters: APIResponde<Characters[]>;
  episodes: APIResponde<Episode[]>;
}
//generics
export interface APIResponde<T> {
  results: T;
}
export interface Episode {
  name: string;
  episode: string;
}
export interface Characters {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  isFavorite?: boolean;
}
