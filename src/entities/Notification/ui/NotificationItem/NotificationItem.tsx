import { classNames } from 'shared/lib/classNames/classNames';
import { Card, CardTheme } from 'shared/ui/Card/Card';
import { Text } from 'shared/ui/Text/Text';
import { INotification } from '../../model/types/notification';
import cls from './NotificationItem.module.scss';

interface NotificationItemProps {
    className?: string,
    item?: INotification
}

export const NotificationItem = ({ className, item }: NotificationItemProps) => {
    const content = (
        <Card
            className={classNames(cls.notificationItem, [className])}
            theme={CardTheme.OUTLINED}
        >
            <Text title={item?.title} text={item?.description} />
        </Card>
    );

    if (item?.href) {
        return (
            <Card theme={CardTheme.OUTLINED}>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href={item.href}
                    className={classNames(cls.link)}
                >
                    <Text title={item?.title} text={item?.description} />
                </a>
            </Card>
        );
    }

    return content;
};
