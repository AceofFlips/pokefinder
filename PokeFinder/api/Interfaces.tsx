export interface NamedAPIResource {
  name: string;
  url: string;
}

export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: NamedAPIResource[];
}

export interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  types: {
    slot: number;
    type: NamedAPIResource;
  }[];
}
export interface Species {
  id: number;
  name: string;
  pokedex_numbers: {
    entry_number: number;
    pokedex: NamedAPIResource;
  }[];
  varieties: {
    is_default: boolean;
    pokemon: NamedAPIResource;
  }[];
}
export interface LocationArea {
  id: number;
  name: string;
  encounter_method_rates: {
    encounter_method: NamedAPIResource;
    version_details: {
      rate: number;
      version: NamedAPIResource;
    }[];
  }[];
  pokemon_encounters: {
    pokemon: NamedAPIResource;
    version_details: {
      version: NamedAPIResource;
      max_chance: number;
      encounter_details: {
        min_level: number;
        max_level: number;
        condition_values: NamedAPIResource[];
        method: NamedAPIResource;
      }[];
    }[];
  }[];
}