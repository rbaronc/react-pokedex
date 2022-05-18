import { FlavorTextEntry } from './pokemon-species';

export default interface IPokemon {
    id: number;
    name: string;
    pokedexListImage: string;
    species: number;
    genus?: string;
    evolves_from_species?: IPokemon | null;
    is_baby?: Boolean;
    is_legendary?: Boolean;
    is_mythical?: Boolean;
    flavor_text_entries?: FlavorTextEntry[];
}