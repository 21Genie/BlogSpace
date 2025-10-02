import { FeatureFlags } from '@/shared/types/featureFlags';
import { getFeatures } from './setGetFeatures';

interface toggleFeaturesOptions<T> {
    name: keyof FeatureFlags;
    on: () => T;
    off: () => T;
}

export const toggleFeatures = <T>({
    name,
    off,
    on,
}: toggleFeaturesOptions<T>) => {
    if (getFeatures(name)) {
        return on();
    }

    return off();
};
