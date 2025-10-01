import { classNames } from '@/shared/lib/classNames/classNames';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { useNotifications } from '../../api/notificationApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import cls from './NotificationList.module.scss';

interface NotificationListProps {
    className?: string;
}

export const NotificationList = ({ className }: NotificationListProps) => {
    const { data, isLoading } = useNotifications(null, {
        pollingInterval: 10000,
    });

    if (isLoading) {
        return (
            <div className={classNames(cls.notificationList, [className])}>
                <Skeleton width="100%" border="12px" height="80px" />
                <Skeleton width="100%" border="12px" height="80px" />
                <Skeleton width="100%" border="12px" height="80px" />
            </div>
        );
    }

    return (
        <div className={classNames(cls.notificationList, [className])}>
            {data?.map((item) => (
                <NotificationItem item={item} key={item.id} />
            ))}
        </div>
    );
};
