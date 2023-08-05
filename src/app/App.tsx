import './styles/index.scss';

import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useEffect, useState } from 'react';
import AppRouter from './providers/router/ui/AppRouter';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import { Modal } from 'shared/ui/Modal/Modal';

export const App = () => {
    const { theme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <button onClick={() => setIsOpen(true)}>toggle</button>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eius quibusdam architecto molestiae optio doloremque magni sapiente, pariatur quidem, a et veritatis illo asperiores earum accusantium voluptatem inventore natus commodi.
                </Modal>
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};
