import { classNames } from '@/shared/lib/classNames/classNames'
import { Input } from '@/shared/ui/Input/Input'
import { Modal } from '@/shared/ui/Modal'
import { StarRating } from '@/shared/ui/StarRating/StarRating'
import { Text } from '@/shared/ui/Text/Text'
import { useCallback, useState } from 'react'
import cls from './RatingCard.module.scss'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import { Drawer } from '@/shared/ui/Drawer/Drawer'
import { BrowserView, MobileView } from 'react-device-detect'

interface RatingCardProps {
    className?: string,
    title?: string
    feedbackTitle?: string,
    hasFeedback?: boolean,
    onAccept?: (startsCount: number, feedback?: string) => void,
    onCancel?: (startsCount: number) => void,
}

export const RatingCard = ({ 
    className,
    title,
    feedbackTitle,
    hasFeedback,
    onAccept,
    onCancel
}: RatingCardProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(0);
    const [feedback, setFeedback] = useState('');

    const onSelectedStarts = useCallback((selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount)
        
        if (hasFeedback) {
            setIsModalOpen(true)
        } else {
            onAccept?.(selectedStarsCount)
        }
    }, [hasFeedback, onAccept])

    const acceptHandle = useCallback(() => {
        setIsModalOpen(false)
        onAccept?.(starsCount, feedback)
    }, [onAccept, starsCount, feedback])

    const cancelHandle = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount)
    }, [onCancel, starsCount])

    const modalContent = (
        <div className={cls.innerModal}>
                <Text title={feedbackTitle}/>
                <Input placeholder='Ваш отзыв' value={feedback} onChange={setFeedback}/>
            <div className={cls.btnWrapper}>
                <Button onClick={cancelHandle} theme={ButtonTheme.OUTLINE_RED}>
                    Закрыть
                </Button>
                <Button onClick={acceptHandle}>
                    Отправить
                </Button>
            </div>
        </div>
    )

    return (
        <div className={classNames(cls.ratingCard, [className])}>
            <div className={cls.wrapper}>
                <Text title={title}/>
                <StarRating size={40} onSelect={onSelectedStarts}/>
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
        </div>
     )
}
