export interface Sprites {sprites: {
  front_default: string;}
}

export interface PokeDesc {
  name: string;
  types: string[];
  moves: string[];
  picture: Sprites;
  height: number;
  weight: number;
}

