import { classNames } from "shared/lib/classNames/classNames";

import cls from './Modal.module.scss';
import { ReactNode, useState } from "react";


interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Modal = (props: ModalProps) => {
    const { className, children, isOpen, onClose } = props;

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen
    }

    const closeHandler = () => {
        if(onClose) {
            onClose();
        }
    }

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    }

  return (

    <div className={classNames(cls.Modal, mods, [className])}>
        <div className={cls.overlay} onClick={closeHandler}>
            <div className={cls.content} onClick={onContentClick}>
                {children}
            </div>
        </div>
    </div>
  )
}
