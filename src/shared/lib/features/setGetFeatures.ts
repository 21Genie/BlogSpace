import { FeatureFlags } from '@/shared/types/featureFlags';

let featureFlags: FeatureFlags;

export const setFeatures = (newFeatureFlags?: FeatureFlags) => {
    if (newFeatureFlags) {
        featureFlags = newFeatureFlags;
    }
};

export const getFeatures = (flag: keyof FeatureFlags) => {
    return featureFlags[flag];
};
