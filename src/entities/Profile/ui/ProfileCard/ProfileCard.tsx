import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
   className?: string
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const data = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);

    return (
        <div className={classNames(cls.profileCard, [className])}>
            <div className={cls.header}>
                <Text title={t('Профиль')} />
                <Button
                    className={cls.editBtn}
                    theme={ButtonTheme.OUTLINE}
                >
                    {t('Редактировать')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input value={data?.first} placeholder={t('Ваше имя')} type="text" />
                <Input value={data?.lastname} placeholder={t('Ваше фамилия')} type="text" />
            </div>
        </div>
    );
};
