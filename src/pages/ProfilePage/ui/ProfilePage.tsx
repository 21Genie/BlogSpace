import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

import { EditableProfileCard, profileReducer } from '@/features/editableProfileCard';
import { Page } from '@/widgets/Page';
import { Text } from '@/shared/ui/Text/Text';

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = () => {
    const { t } = useTranslation('profile');
    const { id } = useParams<{id: string}>();

    if (!id) {
        return <Text title={t('Профиль не найден')} />;
    }

    return (
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount
        >
            <Page data-testid="ProfilePage">
                <EditableProfileCard id={id} />
            </Page>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
