import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoSimpleCarouselViewProps } from './ExpoSimpleCarousel.types';

const NativeView: React.ComponentType<ExpoSimpleCarouselViewProps> =
  requireNativeViewManager('ExpoSimpleCarousel');

export default function ExpoSimpleCarouselView(props: ExpoSimpleCarouselViewProps) {
  return <NativeView {...props} />;
}
