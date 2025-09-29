import {
    MutableRefObject, ReactNode,
    UIEvent,
    useRef,
} from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';

import { StateSchema } from '@/app/providers/StoreProvider';
import { getScrollByPath, scrollSaveActions } from '@/features/ScrollSave';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle';

import { TestProps } from '@/shared/types/tests';
import cls from './Page.module.scss';

interface PageProps extends TestProps {
    children: ReactNode,
    className?: string,
    onScrollEnd?: () => void
}

export const Page = (props: PageProps) => {
    const { className, children, onScrollEnd } = props;
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
        <section
            ref={wrapperRef}
            className={classNames(cls.page, [className])}
            onScroll={onScroll}
            data-testid={props['data-testid'] ?? 'Page'}
        >
            {children}
            {onScrollEnd
                ? <div className={cls.target} ref={targetRef} />
                : null}
        </section>
    );
};
