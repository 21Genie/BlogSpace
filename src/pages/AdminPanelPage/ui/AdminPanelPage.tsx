import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const AdminPanelPage = () => {
    const { t } = useTranslation('admin');
    return (
        <Page>
            {t('Панель админа')}
        </Page>
    );
};

export default AdminPanelPage;
