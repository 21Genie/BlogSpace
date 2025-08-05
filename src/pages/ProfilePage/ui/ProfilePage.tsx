import { useCallback, useEffect } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';

import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ProfileCard } from '../../../entities/Profile/ui/ProfileCard/ProfileCard';
import {
    fetchProfileData, getProfileReadonly,
    getProfileError, getProfileForm, getProfileIsLoading, profileAction, profileReducer,
} from '../../../entities/Profile';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = () => {
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const readonly = useSelector(getProfileReadonly);

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    const onChangeFirstname = useCallback((value: string) => {
        dispatch(profileAction.updateProfile({ first: value }));
    }, [dispatch]);

    const onChangeLastname = useCallback((value: string) => {
        dispatch(profileAction.updateProfile({ lastname: value }));
    }, [dispatch]);

    const onChangeAge = useCallback((value: string) => {
        const age = Number(value?.replace(/\D/g, ''));
        dispatch(profileAction.updateProfile({ age: age || 0 }));
    }, [dispatch]);

    const onChangeCity = useCallback((value: string) => {
        dispatch(profileAction.updateProfile({ city: value || '' }));
    }, [dispatch]);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(profileAction.updateProfile({ username: value || '' }));
    }, [dispatch]);

    const onChangeAvatar = useCallback((value: string) => {
        dispatch(profileAction.updateProfile({ avatar: value || '' }));
    }, [dispatch]);

    const onChangeCurrency = useCallback((currency: Currency) => {
        dispatch(profileAction.updateProfile({ currency }));
    }, [dispatch]);

    const onChangeCountry = useCallback((country: Country) => {
        dispatch(profileAction.updateProfile({ country }));
    }, [dispatch]);

    return (
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount
        >
            <ProfilePageHeader />
            <div>
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    readonly={readonly}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
