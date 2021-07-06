import { createStackNavigator } from '@react-navigation/stack';
import Information from '@home/screens/Information';
import Playground from '@home/screens/Playground';
import { appScreenNavOptions, mainTabNavConfig } from '@config/navigation';
import Routes from '@constants/routes';
import ZerfWeb from '@app/screens/Home/screens/ZerfWeb';

import { generateNavigator } from './utils';

const AppStack = createStackNavigator();

const PLAYGROUND_STACK_SCREENS = {
  screens: [
    {
      name: Routes.Playground,
      component: Playground,
      options: appScreenNavOptions[Routes.Playground]
    },
    {
      name: Routes.ZerfWeb,
      component: ZerfWeb,
      options: appScreenNavOptions[Routes.ZerfWeb]
    }
  ]
};

export const TAB_BAR_SCREENS = {
  config: mainTabNavConfig,
  screens: [
    {
      name: Routes.Information,
      component: Information
    },
    {
      name: Routes.PlaygroundStack,
      component: generateNavigator(AppStack, PLAYGROUND_STACK_SCREENS)
    }
  ]
};
