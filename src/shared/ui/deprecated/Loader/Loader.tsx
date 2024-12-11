import { classNames } from '@/shared/lib/classNames/classNames';
import './Loader.module.scss';

interface LoaderProps {
    className?: string;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Loader = ({ className }: LoaderProps) => (
    <div className={classNames('ldio-b8648fwgms5', {}, [className || ''])}>
        <div className="loadingio-spinner-spinner-jbs73payuvr">
            <div className="ldio-b8648fwgms5">
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
            </div>
        </div>
    </div>
);
