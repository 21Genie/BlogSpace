import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { ArticleImageBlock } from '../../model/types/article';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
    block: ArticleImageBlock,
    className?: string
}

export const ArticleImageBlockComponent = ({ className, block }: ArticleImageBlockComponentProps) => (
    <div className={classNames(cls.articleImageBlockComponent, [className])}>
        <img src={block.src} className={cls.img} alt={block.title} />
        {block.title && (
            <Text text={block.title} align={TextAlign.CENTER} />
        )}
    </div>
);
