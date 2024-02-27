export interface PokemonStat {
    name: string;
    value: number;
}

export interface Pokemon {
    id: number;
    name: string;
    imageUrl: string;
    size: string;
    stats: PokemonStat[];
}

export interface PokemonPagedList {
    ids: number[];
    total: number;
    page: number;
    pageSize: number;
}
