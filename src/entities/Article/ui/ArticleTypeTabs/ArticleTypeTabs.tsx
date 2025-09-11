import { useCallback, useMemo } from 'react';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { useTranslation } from 'react-i18next';
import { ArticleType } from '../../model/consts/consts';

interface ArticleTypeTabsProps {
    value: string,
    onChangeType: (type: ArticleType) => void
}

export const ArticleTypeTabs = ({ value, onChangeType }: ArticleTypeTabsProps) => {
    const { t } = useTranslation('articles');
    const typeTabs = useMemo<TabItem[]>(() => [
        {
            value: ArticleType.ALL,
            content: t('Все статьи'),
        },
        {
            value: ArticleType.IT,
            content: t('Айти'),
        },
        {
            value: ArticleType.ECONOMICS,
            content: t('Экономика'),
        },
        {
            value: ArticleType.SCIENCE,
            content: t('Наука'),
        },
    ], [t]);

    const onChangeTypeArticle = useCallback((tab: TabItem) => {
        onChangeType(tab.value as ArticleType);
    }, [onChangeType]);

    return (
        <Tabs
            tabs={typeTabs}
            value={value}
            onTabClick={onChangeTypeArticle}
        />
    );
};
