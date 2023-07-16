import './styles/index.scss';

import { useTheme } from "./providers/ThemeProvider/lib/useTheme";

import { classNames } from "shared/lib/classNames/classNames";
import AppRouter from "./providers/router/ui/AppRouter";
import { Navbar } from 'widgets/Navbar';


export const App = () => {
    const {theme, toggleTheme} = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <AppRouter />
            <button onClick={() => toggleTheme()}>TOGGLE</button>
        </div>
    )
}
