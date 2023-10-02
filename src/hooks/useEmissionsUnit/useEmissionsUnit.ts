/**
 * @TODO
 * 1. Tests
 */
export const useEmissionUnit = (emissionOffset: number) => {
  const emissionOffsetInUnit =
    emissionOffset >= 1000
      ? `${(emissionOffset / 1000).toFixed(1)} t`
      : `${emissionOffset.toFixed(1)} kg`;

  return emissionOffsetInUnit;
};
