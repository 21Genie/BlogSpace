import { useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Card } from '@/shared/ui/Card/Card';
import { Drawer } from '@/shared/ui/Drawer/Drawer';
import { Input } from '@/shared/ui/Input/Input';
import { Modal } from '@/shared/ui/Modal';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { Text } from '@/shared/ui/Text/Text';
import cls from './RatingCard.module.scss';

interface RatingCardProps {
    className?: string,
    title?: string
    feedbackTitle?: string,
    hasFeedback?: boolean,
    rating?: number,
    onAccept?: (startsCount: number, feedback?: string) => void,
    onCancel?: (startsCount: number) => void,
}

export const RatingCard = ({
    className,
    title,
    feedbackTitle,
    hasFeedback,
    rating,
    onAccept,
    onCancel,
}: RatingCardProps) => {
    const { t } = useTranslation('article');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rating || 0);
    const [feedback, setFeedback] = useState('');

    const onSelectedStarts = useCallback((selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount);

        if (hasFeedback) {
            setIsModalOpen(true);
        } else {
            onAccept?.(selectedStarsCount);
        }
    }, [hasFeedback, onAccept]);

    const acceptHandle = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [onAccept, starsCount, feedback]);

    const cancelHandle = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const modalContent = (
        <div className={cls.innerModal}>
            <Text title={feedbackTitle} />
            <Input placeholder={t('Ваш отзыв')} value={feedback} onChange={setFeedback} />
            <div className={cls.btnWrapper}>
                <Button onClick={cancelHandle} theme={ButtonTheme.OUTLINE_RED}>
                    {t('Закрыть')}
                </Button>
                <Button onClick={acceptHandle}>
                    {t('Отправить')}
                </Button>
            </div>
        </div>
    );

    return (
        <Card className={classNames(cls.ratingCard, [className])} fullWidth>
            <div className={cls.wrapper}>
                <Text title={title} />
                <StarRating rating={rating} size={40} onSelect={onSelectedStarts} />
            </div>
            <BrowserView>
                <Modal isOpen={isModalOpen} lazy>
                    {modalContent}
                </Modal>
            </BrowserView>

            <MobileView>
                <Drawer isOpen={isModalOpen} lazy>
                    {modalContent}
                </Drawer>
            </MobileView>
        </Card>
    );
};
