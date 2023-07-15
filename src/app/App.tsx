import { Route, Routes } from "react-router-dom";
import './styles/index.scss';

import { Link } from "react-router-dom";
import { Suspense } from "react";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";

import AboutPage from "pages/AboutPage/ui/AboutPage";
import MainPage from "pages/MainPage/ui/MainPage";
import { classNames } from "shared/lib/classNames/classNames";


export const App = () => {
    const {theme, toggleTheme} = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={() => toggleTheme()}>TOGGLE</button>
            <Link to="/">Главная</Link>
            <Link to="/about">Инфо</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </Suspense>
        </div>
    )
}
