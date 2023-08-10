import { ReactNode } from "react";
import { Provider } from "react-redux";

interface StoreProviderProps {
    children?: ReactNode;
}

export const StoreProvider = (props: StoreProviderProps) => {
    const { children } = props;
    return (
        <Provider store={}>
            { children }
        </Provider>
    )
};