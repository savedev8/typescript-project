import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

const MAIN_TITLE = 'Главная';
const INFO_TITLE = 'Информация';

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.navbar, {}, [className])}>
        <div className={cls.links}>
            <AppLink
                theme={AppLinkTheme.SECONDARY}
                to="/"
                className={cls.mainLink}
            >
                {MAIN_TITLE}
            </AppLink>
            <AppLink
                theme={AppLinkTheme.SECONDARY}
                to="/about"
            >
                {INFO_TITLE}

            </AppLink>
        </div>
    </div>
);
