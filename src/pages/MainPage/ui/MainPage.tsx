import { Page } from '@/widgets/Page/Page';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <Page data-testid={'MainPage'}>
            <div>12312312hjhjkhkjhkhjkh3123123123</div>
            {t('Главная страница')}
        </Page>
    );
};

export default MainPage;
