import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { PokeCardList } from "../components/PokeCardList";
import { pokedexActions } from "../redux/slices/pokedex.slice";

export const PokedexPage = () => 
{
    const pokedex = useAppSelector(store => store.pokedex.pagination);
    const dispatch = useAppDispatch();

    return (
        <>
            <PokeCardList 
                pagination={pokedex}
                onPageChange={page => dispatch(pokedexActions.changePage({page, pageSize: pokedex.pageSize}))}
                onPageSizeChange={pageSize => dispatch(pokedexActions.changePage({page: 1, pageSize}))}
            />
        </>
    );
};
