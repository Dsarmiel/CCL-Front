import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { routes } from './app.routes';
import AppPreset from './app.theme';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { tokenInterceptor } from './shared/interceptors/token.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([tokenInterceptor])),
    providePrimeNG({
      theme: {
        preset: AppPreset,
        options: {
          darkModeSelector: '.ccl-dark',
        },
      },
    }),
  ],
};
