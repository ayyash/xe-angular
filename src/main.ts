
import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { CoreProviders } from './app/core/core.module';
import { AppRouteProviders } from './app/routing.module';

import { environment } from './environments/environment';

if (environment.production) {
    enableProdMode();
}




bootstrapApplication(AppComponent, {
    providers: [
      ...CoreProviders,
      ...AppRouteProviders
    ],
  });

