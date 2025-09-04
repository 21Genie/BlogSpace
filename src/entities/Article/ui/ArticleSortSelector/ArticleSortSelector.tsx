import { classNames } from 'shared/lib/classNames/classNames';
import { Select, SelectOptions } from 'shared/ui/Select/Select';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { SortOrder } from 'shared/types';
import { ArticleSortField } from '../../model/types/article';

import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
   className?: string
   sort: ArticleSortField,
   order: SortOrder,
   onChangeOrder: (newOrder: SortOrder) => void,
   onChangeSort: (newSort: ArticleSortField) => void,
}

export const ArticleSortSelector = ({
    className, order, sort, onChangeOrder, onChangeSort,
}: ArticleSortSelectorProps) => {
    const { t } = useTranslation('articles');
    const orderOptions = useMemo<SelectOptions<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('возрастанию'),
        },
        {
            value: 'desc',
            content: t('убыванию'),
        },
    ], [t]);

    const sortFieldOptions = useMemo<SelectOptions<ArticleSortField>[]>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t('дате создания'),
        },
        {
            value: ArticleSortField.TITLE,
            content: t('названию'),
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('посмотрам'),
        },
    ], [t]);

    return (
        <div className={classNames(cls.articleSortSelector, [className])}>
            <Select
                label={t('Сортировать По')}
                options={sortFieldOptions}
                value={sort}
                onChange={onChangeSort}
            />
            <Select
                label={t('По')}
                options={orderOptions}
                value={order}
                onChange={onChangeOrder}
            />
        </div>
    );
};
