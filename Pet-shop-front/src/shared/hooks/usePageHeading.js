import { useEffect } from 'react';

export function usePageHeading(title) {
    useEffect(() => {
        document.title = title;
    }, [title]);
}
