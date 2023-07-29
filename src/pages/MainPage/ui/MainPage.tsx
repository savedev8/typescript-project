import { BugButton } from 'app/providers/ErrorBoundary';
import { useTranslation } from 'react-i18next';
import { Loader } from 'shared/ui/Loader/Loader';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';

const MainPage = () => {
    const { t } = useTranslation('main');
    return (
        <div>
            {/* {t('Главная')} */}
            <Loader />
        </div>
    );
};

export default MainPage;
