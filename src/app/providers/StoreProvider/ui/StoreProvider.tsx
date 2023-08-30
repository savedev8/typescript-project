import { ReactNode } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

let useAppDispatch;
export const StoreProvider = (props: StoreProviderProps) => {
    const { children, initialState, asyncReducers } = props;

    const store = createReduxStore(
        initialState as StateSchema,
        asyncReducers as ReducersMapObject<StateSchema>,
    );

    type AppDispatch = typeof store.dispatch
    useAppDispatch = () => useDispatch<AppDispatch>();

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export { useAppDispatch };
