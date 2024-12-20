import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const AboutPage = () => {
    const { t } = useTranslation('about');
    return (
        <Page data-testid={'AboutPage'}>
            <div>{t('О сайте')}</div>
            <div>{t('О сайте c плагином')}</div>
        </Page>
    );
};

export default AboutPage;
