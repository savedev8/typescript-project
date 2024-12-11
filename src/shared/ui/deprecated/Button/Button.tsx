import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, ReactNode, memo } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outline_red',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    children?: ReactNode;
    fullWidth?: boolean;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        theme = ButtonTheme?.OUTLINE,
        square,
        disabled,
        fullWidth,
        size = ButtonSize?.M,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls[theme]]: true,
        [cls?.square]: square,
        [cls[size]]: size,
        [cls?.disabled]: disabled,
        [cls?.fullWidth]: fullWidth,
    };

    return (
        <button
            data-testid="button-testid"
            type="button"
            disabled={disabled}
            className={classNames(cls?.Button, mods || {}, [className || ''])}
            {...otherProps}
        >
            {children}
        </button>
    );
});
