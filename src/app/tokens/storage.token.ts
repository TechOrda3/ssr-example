import {inject, InjectionToken} from '@angular/core';
import {DOCUMENT} from '@angular/common';

export const LOCAL_STORAGE = new InjectionToken<Storage>('localstorage token', {
  providedIn: 'root',
  factory: () => {
    const window = inject(WINDOW);
    return window!.localStorage
  }
});

export const WINDOW = new InjectionToken<Window>('window token', {
  providedIn: 'root',
  factory: () => {
    const document = inject(DOCUMENT);
    return document!.defaultView!;
  }
});

export const NAVIGATOR = new InjectionToken<Navigator>('NAVIGATOR token', {
  providedIn: 'root',
  factory: () => {
    const { defaultView } = inject(DOCUMENT);
    return defaultView!.navigator;
  }
});
