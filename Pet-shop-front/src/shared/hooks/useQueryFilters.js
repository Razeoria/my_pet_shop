import { useSearchParams } from 'react-router-dom';

export function useQueryFilters(defaults = {}) {
    const [params, setParams] = useSearchParams();

    const priceFrom = params.get('from') ? Number(params.get('from')) : (defaults.priceFrom || 0);
    const priceTo = params.get('to') ? Number(params.get('to')) : (defaults.priceTo ?? Infinity);
    const discounted = params.get('disc') === '1';
    const sortBy = params.get('sort') || defaults.sortBy || 'default';

    const setFilters = updates => {
        if (updates.priceFrom != null) params.set('from', updates.priceFrom);
        if (updates.priceTo != null) params.set('to', updates.priceTo);
        if (updates.discounted != null) {
            if (updates.discounted) params.set('disc', '1');
            else params.delete('disc');
        }
        if (updates.sortBy != null) params.set('sort', updates.sortBy);
        setParams(params, { replace: true });
    };

    return {
        filters: { priceFrom, priceTo, discounted, sortBy },
        setFilters,
    };
}


