import { APP_INITIALIZER, ErrorHandler, importProvidersFrom } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { XeInterceptor } from './http';
import { LocalInterceptor } from './local.interceptor';
import { XeErrorHandler } from './error.service';
import { configFactory, ConfigService } from '../services/config.service';



export const CoreProviders = [
    importProvidersFrom(HttpClientModule),
    Title,
    {
      provide: APP_INITIALIZER,
      useFactory: configFactory,
      multi: true,
      deps: [ConfigService]
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LocalInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: XeInterceptor,
      multi: true,
    },
    { provide: ErrorHandler, useClass: XeErrorHandler }
  ];

