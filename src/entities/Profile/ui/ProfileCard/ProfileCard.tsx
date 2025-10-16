import { useTranslation } from 'react-i18next';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text/Text';
import { Input } from '@/shared/ui/Input/Input';
import { Loader } from '@/shared/ui/Loader/Loader';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Currency } from '@/entities/Currency';
import { Profile } from '../../model/types/profile';
import { CurrencySelect } from '../../../../entities/Currency';
import { Country, CountrySelect } from '../../../../entities/Country';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeFirstname?: (value: string) => void;
    onChangeLastname?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeCity?: (value: string) => void;
    onChangeUsername?: (value: string) => void;
    onChangeAvatar?: (value: string) => void;
    onChangeCurrency?: (value: Currency) => void;
    onChangeCountry?: (value: Country) => void;
}

export const ProfileCard = ({
    className,
    data,
    error,
    isLoading,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
}: ProfileCardProps) => {
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div
                className={classNames(cls.profileCard, [className], {
                    [cls.loading]: isLoading,
                })}
            >
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div
                className={classNames(cls.profileCard, [className, cls.error])}
            >
                <Text
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуйте обновить страницу')}
                />
            </div>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <div className={classNames(cls.profileCard, [className], mods)}>
            {data?.avatar && (
                <div className={cls.avatarWrapper}>
                    <Avatar
                        className={cls.image}
                        src={data?.avatar}
                        alt="Аватарка"
                    />
                </div>
            )}
            <form className={cls.data}>
                <Input
                    value={data?.first}
                    placeholder={t('Ваше имя')}
                    type="text"
                    readonly={readonly}
                    onChange={onChangeFirstname}
                    data-testid="ProfileCard.Firstname"
                    name="firstname"
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Ваше фамилия')}
                    type="text"
                    readonly={readonly}
                    onChange={onChangeLastname}
                    data-testid="ProfileCard.Lastname"
                    name="lastname"
                />
                <Input
                    value={data?.age}
                    placeholder={t('Ваш возраст')}
                    type="text"
                    readonly={readonly}
                    onChange={onChangeAge}
                    name="age"
                />
                <Input
                    value={data?.city}
                    placeholder={t('Ваш город')}
                    type="text"
                    readonly={readonly}
                    onChange={onChangeCity}
                    name="city"
                />
                <Input
                    value={data?.username}
                    placeholder={t('Введите имя пользователя')}
                    type="text"
                    readonly={readonly}
                    onChange={onChangeUsername}
                    name="nickname"
                />
                <Input
                    value={data?.avatar}
                    placeholder={t('Введите ссылку на аватар')}
                    type="text"
                    readonly={readonly}
                    onChange={onChangeAvatar}
                    name="avatar"
                />
                <CurrencySelect
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />
                <CountrySelect
                    value={data?.country}
                    onChange={onChangeCountry}
                    readonly={readonly}
                />
            </form>
        </div>
    );
};
