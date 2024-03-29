import axios from "axios";
import { Pokemon, PokemonPagedList, PokemonStat } from "../models/pokemon.model";

const axiosConnection = axios.create({
    baseURL: "https://pokeapi.co/api/v2/"
});

export const api = 
{

    loadIndexList: async (page: number, pageSize: number) : Promise<PokemonPagedList> => 
    {
        try
        {
            const offset = (page - 1) * pageSize;
            const { data } = await axiosConnection.get(`pokemon?offset=${offset}&limit=${pageSize}`);

            const idRegex = /\/(\d+)\//g;
            const ids : number[] = data.results.map((entry: any) => 
            {
                const result = (idRegex.exec(entry.url) || ['0', '0']);
                idRegex.lastIndex = 0;
                return parseInt(result[1]);
            });

            return {
                ids,
                total: data.count,
                page,
                pageSize
            };
        }
        catch (error) 
        {
            console.log(error);
            return {
                ids: [],
                total: 0,
                page,
                pageSize
            };
        }
    },

    loadPokemon: async (id: number) : Promise<Pokemon | null> => 
    {
        try
        {
            const { data } = await axiosConnection.get(`pokemon/${id}`);

            const stats : PokemonStat[] = data.stats.map((s: any) => ({name: s.stat.name, value: s.base_stat}));

            return {
                id: data.id,
                name: data.name,
                imageUrl: data.sprites.other?.['official-artwork']?.front_default ?? data.sprites.front_default,
                stats,
                size: 
                    !data.height ? 'Unknow' :
                    data.height < 10 ? "Small" : 
                    data.height < 20 ? "Medium" : 
                    data.height < 40 ? "Large" : 
                    data.height < 100 ? "Extra Large" : 
                    "Giant"
            };
        }
        catch (error) 
        {
            console.log(error);
            return null;
        }
    }
};