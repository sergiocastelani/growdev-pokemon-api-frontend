import axios from "axios";
import { Pokemon } from "../models/pokemon.model";

const axiosConnection = axios.create({
    baseURL: "https://pokeapi.co/api/v2/"
});

export const api = 
{

    loadPokemon: async (id: number) : Promise<Pokemon | null> => 
    {
        try
        {
            const { data } = await axiosConnection.get(`pokemon/${id}`);
            return {
                id: data.id,
                name: data.name,
                imageUrl: data.sprites.other?.['official-artwork']?.front_default ?? data.sprites.front_default,
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