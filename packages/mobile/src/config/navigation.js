import React from 'react';
import statusBarConfig from '@constants/statusBar';
import Routes from '@constants/routes';
import TabBar from '@components/AppNavigator/components/TabBar';
import { purple, white } from '@constants/colors';
import Icon from '@app/components/Icon';
import backArrow from '@assets/back-arrow.png';
import i18next from 'i18next';

import fonts from './fonts';
import styles from './styles';

const STATUS_BAR_STYLES = {
  [Routes.Home]: statusBarConfig.darkStatusBar
};

export const appStackNavConfig = {
  screenOptions: {
    cardOverlayEnabled: true
  }
};

const baseTabScreenOption = {
  headerStyle: {
    backgroundColor: purple
  },
  headerTitleStyle: {
    ...fonts.semiBoldFont,
    textAlign: 'center',
    color: white
  },
  headerTitleAlign: 'center',
  headerBackTitleVisible: false,
  headerTintColor: white,
  headerBackImage: () => <Icon size={24} source={backArrow} style={styles.arrow} />
};

const noHeaderOptions = { headerShown: false };

const withoutHeaderLeft = {
  headerLeft: null
};

const tabScreenOption = ({ route }) => ({
  ...baseTabScreenOption,
  headerTitle: i18next.t(`App:${route.name}`)
});

export const appScreenNavOptions = {
  [Routes.InitialLoading]: noHeaderOptions,
  [Routes.Home]: withoutHeaderLeft,
  [Routes.PlaygroundStack]: noHeaderOptions,
  [Routes.Playground]: noHeaderOptions,
  [Routes.ZerfWeb]: tabScreenOption
};

export const mainStackNavConfig = {
  gestureEnabled: true
};

export const mainTabNavConfig = {
  tabBar: props => <TabBar tabRoute={Routes.Home} {...props} />,
  initialRouteName: Routes.Home
};

export const statusBarStyles = route => STATUS_BAR_STYLES[route] || statusBarConfig.whiteStatusBar;
