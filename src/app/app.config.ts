// Core
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

// App
import { routes } from './app.routes';

// Angular
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

// Interceptors
// import { authInterceptor } from './core/interceptors/auth-interceptor';
// import { errorHandlingInterceptor } from './core/interceptors/error-handling.interceptor';

// PrimeNG
import { providePrimeNG } from 'primeng/config';
import { ConfirmationService, MessageService } from "primeng/api";
import Aura from '@primeuix/themes/aura';
import { DialogService } from 'primeng/dynamicdialog';

// authInterceptor, errorHandlingInterceptor

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([])),
    provideClientHydration(withEventReplay()),
    providePrimeNG({
      theme: {
        preset: Aura,
      },
    }),
    ConfirmationService,
    MessageService,
    DialogService
  ]
};
