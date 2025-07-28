import { Reducer } from '@reduxjs/toolkit';
import { ReducerWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/stateSchema';
import { ReactNode, useEffect } from 'react';
import { useStore } from 'react-redux';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer
}

type ReducerListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
    children?: ReactNode,
    name: StateSchemaKey,
    reducers: ReducersList,
    removeAfterUnmount?: boolean
}

export const DynamicModuleLoader = ({
    children, name, reducers, removeAfterUnmount,
}: DynamicModuleLoaderProps) => {
    const store = useStore() as ReducerWithManager;
    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
            store.reducerManager.add(name, reducer);
        });

        return () => {
            if (removeAfterUnmount) {
                store.reducerManager.remove(name);
            }
        };
        // eslint-disable-next-line
        }, []);

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {children}
        </>
    );
};
