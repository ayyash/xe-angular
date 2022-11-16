import { provideRouter, RouteReuseStrategy, Routes, withEnabledBlockingInitialNavigation, withInMemoryScrolling, withPreloading, withRouterConfig } from '@angular/router';
import { MainLayoutComponent } from './components/layouts/main.component';
import { PreloadService } from './core/preload.service';
import { RouteReuseService } from './core/routereuse.service';

const AppRoutes: Routes = [

    {
        path: 'rates',
        component: MainLayoutComponent,
        loadChildren: () => import('./routes/rate.route').then(m => m.RateRoutes),
        data: { preload: true }

    },
    {
        path: '',
        component: MainLayoutComponent,
        loadChildren: () => import('./routes/public.route').then(m => m.PublicRoutes),
        data: { preload: true }

    },

    // **gulproute**
    {
        path: '**',
        redirectTo: '/', // make 404
        pathMatch: 'full'
    }
];


export const AppRouteProviders = [
    provideRouter(AppRoutes,
        withPreloading(PreloadService),
        withEnabledBlockingInitialNavigation(),
        withInMemoryScrolling({
            scrollPositionRestoration: 'top',
        }),
        withRouterConfig({
            paramsInheritanceStrategy: 'always',
            onSameUrlNavigation: 'reload'
        })
    ),
    { provide: RouteReuseStrategy, useClass: RouteReuseService }
];
