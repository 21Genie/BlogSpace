import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
    MutableRefObject, ReactNode, useRef, UIEvent,
} from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { getScrollByPath, scrollSaveActions } from '@/features/ScrollSave';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { StateSchema } from '@/app/providers/StoreProvider';
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle';

import cls from './Page.module.scss';

interface PageProps {
    children: ReactNode,
    className?: string,
    onScrollEnd?: () => void
}

export const Page = ({ className, children, onScrollEnd }: PageProps) => {
    const targetRef = useRef() as MutableRefObject<HTMLDivElement>;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollTop = useSelector((state:StateSchema) => getScrollByPath(state, pathname));

    useInfiniteScroll({
        targetRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollTop;
    });

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        const scroll = {
            path: pathname,
            position: e.currentTarget.scrollTop,
        };
        dispatch(scrollSaveActions.setScrollPosition(scroll));
    }, 200);

    return (
        <div
            ref={wrapperRef}
            className={classNames(cls.page, [className])}
            onScroll={onScroll}
        >
            {children}
            {onScrollEnd
                ? <div className={cls.target} ref={targetRef} />
                : null}
        </div>
    );
};
