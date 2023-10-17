import * as React from 'react';

import { ExpoSimpleCarouselViewProps } from './ExpoSimpleCarousel.types';

export default function ExpoSimpleCarouselView(props: ExpoSimpleCarouselViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
