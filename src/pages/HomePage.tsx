import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { changeIndexList } from "../redux/slices/index.slice";
import { PokeCardList } from "../components/PokeCardList";

export const HomePage = () => 
{
    const indexState = useAppSelector(store => store.index);
    const dispatch = useAppDispatch();

    useEffect(() =>
    {
        if (indexState.total === 0)
            dispatch(changeIndexList({page: 1, pageSize: 20}));
    }, []);
    
    return (
        <>
            <PokeCardList 
                pagination={indexState}
                onPageChange={page => dispatch(changeIndexList({page, pageSize: indexState.pageSize}))}
                onPageSizeChange={pageSize => dispatch(changeIndexList({page: 1, pageSize}))}
            />
        </>
    );
};
