import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/deprecated/Button';

export const BugButton = () => {
    const [errors, setErrors] = useState(false);
    const { t } = useTranslation();

    const onThrow = () => setErrors(true);

    useEffect(() => {
        if (errors) {
            throw new Error();
        }
    }, [errors]);

    return (
        <Button onClick={onThrow} className={classNames('', {}, [])}>
            {t('throw new Error')}
        </Button>
    );
};
