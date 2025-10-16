import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import cls from './ProfilePage.module.scss';

import {
    EditableProfileCard,
    EditableProfileCardHeader,
} from '@/features/editableProfileCard';
import { Text } from '@/shared/ui/Text/Text';
import { Page } from '@/widgets/Page';

const ProfilePage = () => {
    const { t } = useTranslation('profile');
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return <Text title={t('Профиль не найден')} />;
    }

    return (
        <div className={cls.profileCard}>
            <Page data-testid="ProfilePage">
                <EditableProfileCardHeader />
                <EditableProfileCard id={id} />
            </Page>
        </div>
    );
};

export default ProfilePage;
