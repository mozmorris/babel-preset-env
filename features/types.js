// @flow
export type Plugin = {
  features: Array<string>
};

export type BuiltIn = string | {
  features: Array<string>
};

export type FeaturesMap<T> = {
  [key: string]: T
};
