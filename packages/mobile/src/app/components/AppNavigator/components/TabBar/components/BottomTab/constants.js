import { verticalScale } from '@utils/scaling';
import icHome from '@assets/ic_home.png';
import Routes from '@constants/routes';

export const ROUTES_ICONS = {
  [Routes.Information]: icHome,
  [Routes.PlaygroundStack]: icHome
};

export const ICON_SIZE = verticalScale(16);
