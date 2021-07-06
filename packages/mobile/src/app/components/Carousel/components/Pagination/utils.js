import { DOT_TYPES } from './components/Dot/constants';

const getIsActiveIndex = activeIndex => index => index === activeIndex;

const isActiveIndexInRange = (activeIndex, dotsLength) => activeIndex > 1 && activeIndex < dotsLength - 2;

const isActiveIndexOrInRange = (activeIndex, dotsLength, index) => {
  const isActiveIndex = getIsActiveIndex(activeIndex);
  const isInRange = isActiveIndexInRange(activeIndex, dotsLength);
  return isActiveIndex(index) || isInRange;
};

const activeConditionPerIndex = (index, dotsLength, activeIndex) => {
  const isActiveIndex = getIsActiveIndex(activeIndex);
  const isTheActiveIndex = isActiveIndex(index);
  const isInRange = isActiveIndexInRange(activeIndex, dotsLength);
  const indexConditions = [
    isTheActiveIndex,
    isTheActiveIndex,
    isInRange,
    isActiveIndex(dotsLength - 2),
    isActiveIndex(dotsLength - 1)
  ];
  return indexConditions[index];
};

const inactiveConditionPerIndex = (index, dotsLength, activeIndex) => {
  const isActiveIndex = getIsActiveIndex(activeIndex);
  const isActiveIndexOne = isActiveIndex(1);
  const isActivePenultimateIndex = isActiveIndex(dotsLength - 2);
  const isTheActiveIndexOrInRange = aIndex => isActiveIndexOrInRange(activeIndex, dotsLength, aIndex);
  const indexConditions = [
    isActiveIndexOne,
    isTheActiveIndexOrInRange(0),
    isActiveIndexOne || isActivePenultimateIndex,
    isTheActiveIndexOrInRange(dotsLength - 1),
    isActivePenultimateIndex
  ];
  return indexConditions[index];
};
export const dotType = (infinite, activeIndex, index, dotsLength) => {
  const isActiveIndex = getIsActiveIndex(activeIndex);
  if (!infinite) return isActiveIndex(index) ? DOT_TYPES.ACTIVE : DOT_TYPES.INACTIVE;
  if (activeConditionPerIndex(index, dotsLength, activeIndex)) return DOT_TYPES.ACTIVE;
  if (inactiveConditionPerIndex(index, dotsLength, activeIndex)) return DOT_TYPES.INACTIVE;
  return DOT_TYPES.INACTIVE_SMALL;
};
