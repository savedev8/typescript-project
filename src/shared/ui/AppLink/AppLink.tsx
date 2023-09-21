import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { FC, ReactNode, memo } from 'react';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
  children?: ReactNode;
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        to, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps
    } = props;
    return (
        // eslint-disable-next-line max-len, react/jsx-props-no-spreading
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className || '', cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
});
