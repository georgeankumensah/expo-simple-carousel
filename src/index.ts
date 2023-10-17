import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoSimpleCarousel.web.ts
// and on native platforms to ExpoSimpleCarousel.ts
import ExpoSimpleCarouselModule from './ExpoSimpleCarouselModule';
import ExpoSimpleCarouselView from './ExpoSimpleCarouselView';
import { ChangeEventPayload, ExpoSimpleCarouselViewProps } from './ExpoSimpleCarousel.types';

// Get the native constant value.
export const PI = ExpoSimpleCarouselModule.PI;

export function hello(): string {
  return ExpoSimpleCarouselModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoSimpleCarouselModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoSimpleCarouselModule ?? NativeModulesProxy.ExpoSimpleCarousel);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoSimpleCarouselView, ExpoSimpleCarouselViewProps, ChangeEventPayload };
