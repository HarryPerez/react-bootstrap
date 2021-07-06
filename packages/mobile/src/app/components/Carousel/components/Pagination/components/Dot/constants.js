export const DOT_TYPES = {
  ACTIVE: 'active',
  INACTIVE_SMALL: 'inactiveSmall',
  INACTIVE: 'inactive'
};

export const dotStyle = (activeColor, inactiveColor, styles) => ({
  [DOT_TYPES.ACTIVE]: { backgroundColor: activeColor },
  [DOT_TYPES.INACTIVE]: { backgroundColor: inactiveColor },
  [DOT_TYPES.INACTIVE_SMALL]: [styles.inactive, { backgroundColor: inactiveColor }]
});
