export interface ISimplifiedPokemon {
    name: string;
    url: string;
}

export interface IPokemonList {
    count: number;
    previous: string;
    next: string;
    results: ISimplifiedPokemon[]
}

export interface IPokeAPIResponse<T = any>  {
    data: T;
    status: number;
    statusText: string;
    headers: any;
    request?: any;
}