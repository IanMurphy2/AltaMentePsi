import { useEffect, useState, type RefObject } from "react";

/**
 * Maps the page scroll to a fold value: N for the N-th `[data-fold]` section inside
 * the container, with the last value reached at the very bottom of the page.
 */
export const useFoldProgress = (containerRef: RefObject<HTMLElement | null>) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let anchors: number[] = [];
        let frame = 0;

        const update = () => {
            frame = 0;
            const y = window.scrollY;
            const max = document.documentElement.scrollHeight - window.innerHeight;
            const last = anchors.length - 1;

            if (y >= max - 2) return setProgress(last);

            let value = last;
            for (let i = 0; i < last; i++) {
                if (y < anchors[i + 1]) {
                    value = i + Math.max(0, (y - anchors[i]) / (anchors[i + 1] - anchors[i]));
                    break;
                }
            }
            setProgress(value);
        };

        const measure = () => {
            const sections = Array.from(container.querySelectorAll<HTMLElement>("[data-fold]"));
            const max = document.documentElement.scrollHeight - window.innerHeight;

            anchors = sections.map((section, i) => {
                if (i === 0) return 0;
                if (i === sections.length - 1) return max;
                return section.getBoundingClientRect().top + window.scrollY - window.innerHeight * 0.5;
            });
            for (let i = 1; i < anchors.length; i++) anchors[i] = Math.max(anchors[i], anchors[i - 1] + 1);
            update();
        };

        const onScroll = () => {
            if (!frame) frame = requestAnimationFrame(update);
        };

        // Heights shift while fonts and images load, so anchors are re-measured on any resize.
        const observer = new ResizeObserver(measure);
        observer.observe(document.body);
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", measure);

        return () => {
            cancelAnimationFrame(frame);
            observer.disconnect();
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", measure);
        };
    }, [containerRef]);

    return progress;
};
