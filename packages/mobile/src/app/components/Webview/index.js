import { func, shape, string } from 'prop-types';
import React, { useRef } from 'react';
import { ViewPropTypes } from 'react-native';
import { WebView } from 'react-native-webview';

function CustomWebView({
  onNavigationStateChanged,
  onNavigationStateEnded,
  stopRedirectionCondition,
  source,
  style
}) {
  const webView = useRef();
  const handleNavigationStateChanged = ({ url, title }) => {
    if (stopRedirectionCondition && stopRedirectionCondition(url)) {
      webView.current?.stopLoading();
      if (onNavigationStateEnded) onNavigationStateEnded(url);
    } else if (onNavigationStateChanged) onNavigationStateChanged(url, title);
  };
  return (
    <WebView
      source={source}
      onNavigationStateChange={handleNavigationStateChanged}
      ref={webView}
      style={style}
      startInLoadingState
    />
  );
}

CustomWebView.propTypes = {
  onNavigationStateChanged: func,
  onNavigationStateEnded: func,
  stopRedirectionCondition: func,
  source: shape({ uri: string }),
  style: ViewPropTypes.style
};

export default CustomWebView;
