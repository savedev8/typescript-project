import { useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';

export const BugButton = () => {
    const [errors, setErrors] = useState(false);

    const onThrow = () => setErrors(true);

    useEffect(() => {
        throw new Error();
    }, [errors]);

    return (
        <Button
            onClick={onThrow}
            className={classNames('', {}, [])}
        >
            throw new Error
        </Button>
    );
};
