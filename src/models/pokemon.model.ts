export interface Pokemon {
    id: number;
    name: string;
    imageUrl: string;
    size: string;
}

export interface PokemonPagedList {
    ids: number[];
    total: number;
    page: number;
    pageSize: number;
}
