import { MutableRefObject, useEffect } from 'react';

interface UseInfiniteScrollProps {
    callback?: () => void,
    targetRef: MutableRefObject<HTMLDivElement>
    wrapperRef: MutableRefObject<HTMLDivElement>
}

export const useInfiniteScroll = (
    { callback, targetRef, wrapperRef }: UseInfiniteScrollProps,
) => {
    useEffect(() => {
        const wrapperElement = wrapperRef.current;
        const triggerElement = targetRef.current;

        let observer: IntersectionObserver | null;
        if (callback) {
            const options = {
                root: wrapperElement,
                rootMargin: '0px',
                threshold: 1.0,
            };

            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);

            observer.observe(triggerElement);
        }

        return () => {
            if (observer) {
                observer.unobserve(triggerElement);
            }
        };
    }, [callback, targetRef, wrapperRef]);
};
