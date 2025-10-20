import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { EditableProfileCard } from '@/features/editableProfileCard';
import { Text } from '@/shared/ui/Text/Text';
import { Page } from '@/widgets/Page';

const ProfilePage = () => {
    const { t } = useTranslation('profile');
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return <Text title={t('Профиль не найден')} />;
    }

    return (
        <Page data-testid="ProfilePage">
            <EditableProfileCard id={id} />
        </Page>
    );
};

export default ProfilePage;
