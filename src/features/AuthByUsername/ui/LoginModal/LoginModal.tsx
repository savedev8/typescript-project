import { classNames } from '@/shared/lib/classNames/classNames';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { Suspense } from 'react';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => (
    <Modal
        className={classNames('', {}, [className || ''])}
        isOpen={isOpen}
        onClose={onClose}
        lazy
    >
        <Suspense fallback="">
            <LoginFormAsync onSuccess={onClose} />
        </Suspense>
    </Modal>
);
