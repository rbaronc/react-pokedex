import IPokemon from "./pokemon";


interface Language {
    name: string;
    url: string;
}

export interface FlavorTextEntry {
    flavor_text: string;
    language: Language;
}

export default interface IPokemonSpecies {
    genus: string;
    evolves_from_species: IPokemon | null;
    is_baby: Boolean;
    is_legendary: Boolean;
    is_mythical: Boolean;
    flavor_text_entries: FlavorTextEntry[];
}