import './styles/index.scss';

import { useTheme } from "./providers/ThemeProvider/lib/useTheme";

import { classNames } from "shared/lib/classNames/classNames";
import AppRouter from "./providers/router/ui/AppRouter";
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';


export const App = () => {
    const {theme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <div className='content-page'>
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    )
}
