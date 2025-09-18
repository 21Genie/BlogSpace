import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

interface ArticleEditPageProps {
   className?: string
}

const ArticleEditPage = ({ className }: ArticleEditPageProps) => {
    const { id } = useParams<{id: string}>();
    const isEdit = Boolean(id);

    return (
        <Page className={classNames('', [className])}>
            {isEdit ? 'Редактирование' : 'Создание'}
        </Page>
    );
};

export default ArticleEditPage;
