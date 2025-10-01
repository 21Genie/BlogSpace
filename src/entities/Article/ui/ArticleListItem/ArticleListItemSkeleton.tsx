import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card/Card';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { ArticleView } from '../../model/consts/consts';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
    view: ArticleView;
    className?: string;
}

export const ArticleListItemSkeleton = ({
    className,
    view,
}: ArticleListItemSkeletonProps) => {
    if (view === ArticleView.BIG) {
        return (
            <div
                className={classNames(cls.articleListItem, [
                    className,
                    cls[view],
                ])}
            >
                <Card>
                    <div className={cls.header}>
                        <Skeleton
                            border="50%"
                            width={30}
                            height={30}
                            className={cls.avatar}
                        />
                        <Skeleton
                            width={150}
                            height={16}
                            className={cls.username}
                        />
                        <Skeleton
                            width={150}
                            height={16}
                            className={cls.date}
                        />
                    </div>
                    <Skeleton width={250} height={24} className={cls.title} />
                    <Skeleton height={200} className={cls.img} />
                    <div className={cls.footer}>
                        <Skeleton width={200} height={36} />
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div
            className={classNames(cls.articleListItem, [className, cls[view]])}
        >
            <Card>
                <div className={cls.imageWrapper}>
                    <Skeleton width={200} height={200} className={cls.img} />
                </div>
                <div className={cls.infoWrapper}>
                    <Skeleton width={130} height={16} className={cls.types} />
                </div>
                <Skeleton width={150} height={32} className={cls.title} />
            </Card>
        </div>
    );
};
