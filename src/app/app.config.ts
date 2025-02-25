import { ApplicationConfig, mergeApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, withHashLocation } from '@angular/router';

import { routes } from './app.routes';

import { coreConfig } from '@core/core.config';


const config: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes, withHashLocation()),
        provideAnimationsAsync()
    ]
};

export const appConfig = mergeApplicationConfig(config, coreConfig);
