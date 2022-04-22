interface Ability {
    ability: { name: string; url: string; }
    is_hidden: boolean;
    slot: number;
}

interface Form {
    name: string;
    url: string;
}

interface Version {
    name: string;
    url: string;
}

interface VersionDetail {
    rarity: number;
    version: Version;
}

interface Item {
    name: string;
    url: string;
}

interface GameIndex {
    game_index: number;
    version: Version;
}

interface HeldItem {
    item: Item;
    version_details: VersionDetail[];
}

interface MoveLearnMethod {
    name: string;
    url: string;
}

interface VersionGroup {
    name: string;
    url: string;
}

interface VersionGroupDetail {
    level_learned_at: number;
    move_learn_method: MoveLearnMethod;
    version_group: VersionGroup;
}

interface Move {
    move: {name: string; url: string};
    version_group_details: VersionGroupDetail[];
}

interface Species {
    name: string;
    url: string;
}

interface DreamWorld {
    front_default: string;
    front_female?: any;
}

interface Home {
    front_default: string;
    front_female?: any;
    front_shiny: string;
    front_shiny_female?: any;
}

interface OfficialArtwork {
    front_default: string;
}

interface Other {
    dream_world: DreamWorld;
    home: Home;
    'official-artwork': OfficialArtwork;
}

interface GenerationImages {
    back_default: string;
    back_shiny: string;
    back_shiny_transparent: string;
    back_transparent: string;
    front_default: string;
    front_shiny: string;
    front_shiny_transparent: string;
    front_transparent: string;
    back_female?: any;
    back_shiny_female?: any;
    front_female?: any;
    front_shiny_female?: any;
}

interface GenerationI {
    'red-blue': GenerationImages;
    yellow: GenerationImages;
}

interface GenerationII {
    crystal: GenerationImages;
    gold: GenerationImages;
    silver: GenerationImages;
}

interface GenerationIII {
    emerald: GenerationImages;
    'firered-leafgreen': GenerationImages;
    'ruby-sapphire': GenerationImages;
}

interface GenerationIV {
    'diamond-pearl': GenerationImages;
    'heartgold-soulsilver': GenerationImages;
    platinum: GenerationImages;
}

interface GenerationV {
    'black-white': GenerationImages;
}

interface GenerationVI {
    'omegaruby-alphasapphire': GenerationImages;
    'x-y': GenerationImages;
}

interface GenerationVII {
    icons: GenerationImages;
    'ultra-sun-ultra-moon': GenerationImages;
}

interface GenerationVIII {
    icons: GenerationImages;
}

interface Versions {
    'generation-i': GenerationI;
    'generation-ii': GenerationII;
    'generation-iii': GenerationIII;
    'generation-iv': GenerationIV;
    'generation-v': GenerationV;
    'generation-vi': GenerationVI;
    'generation-vii': GenerationVII;
    'generation-viii': GenerationVIII;
}

interface Sprites {
    back_default: string;
    back_female?: any;
    back_shiny: string;
    back_shiny_female?: any;
    front_default: string;
    front_female?: any;
    front_shiny: string;
    front_shiny_female?: any;
    other: Other;
    versions: Versions;
}

interface Stat {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    };
}

interface Type {
    slot: number;
    type: {
        name: string;
        url: string;
    };
}

export interface IRawPokemon {
    abilities: Ability[];
    base_experience: number;
    forms: Form[];
    game_indices: GameIndex[];
    height: number;
    held_items: any[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: Move[];
    name: string;
    order: number;
    past_types: any[];
    species: Species;
    sprites: Sprites;
    stats: Stat[];
    types: Type[];
    weight: number;
}