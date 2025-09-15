import { NotificationList } from 'entities/Notification';
import NotificationIcon from 'shared/assets/icons/notification.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { Popover } from 'shared/ui/Popups/ui/Popover/Popover';
import cls from './NotificationButton.module.scss';

export const NotificationButton = () => (
    <Popover
        direction="bottom left"
        trigger={(
            <Button theme={ButtonTheme.CLEAR}>
                <Icon Svg={NotificationIcon} inverted />
            </Button>
        )}
    >
        <NotificationList className={cls.notifications} />
    </Popover>
);
