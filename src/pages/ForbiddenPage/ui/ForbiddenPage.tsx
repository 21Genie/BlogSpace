import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';

export const ForbiddenPage = () => {
    const { t } = useTranslation();
    return (
        <Page>
            {t('У вас нет доступа')}
        </Page>
    );
};
