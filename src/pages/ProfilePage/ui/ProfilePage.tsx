import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

import { EditableProfileCard } from 'features/editableProfileCard';
import { profileReducer } from 'features/editableProfileCard/model/slice/profileSlice';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page/Page';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';

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
            <Page>
                <EditableProfileCard id={id} />
            </Page>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
