import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';

import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';

interface CommentCardProps {
    comment: Comment,
    className?: string,
    isLoading?: boolean
}

export const CommentCard = ({ className, comment, isLoading }: CommentCardProps) => {
    if (isLoading) {
        return (
            <div className={classNames(cls.commentCard, [className])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton width={100} height={16} />
                </div>
                <Skeleton className={cls.text} width="100%" height={50} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.commentCard, [className])}>
            <div className={cls.header}>
                {comment.user.avatar
                    ? <Avatar size={30} src={comment.user.avatar} alt="Аватарка" />
                    : null}
                <Text title={comment.user.username} />
            </div>
            <Text className={cls.text} text={comment.text} />
        </div>
    );
};
