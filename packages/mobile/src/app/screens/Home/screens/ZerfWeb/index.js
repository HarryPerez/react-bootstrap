import React from 'react';
import Webview from '@components/Webview';
import { WEB_LINKS } from '@constants/links';

function ZerfWeb() {
  return <Webview source={WEB_LINKS.ZERF} />;
}

export default ZerfWeb;
