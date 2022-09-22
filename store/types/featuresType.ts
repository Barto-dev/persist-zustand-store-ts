type Features = {
  highlightTooltip: boolean;
};

export interface FeaturesType {
  features: Features;
  toggleFeatureTooltip: (feature: keyof Features, flag: boolean) => void;
}
