import { Routes } from '@angular/router';
import { RateDetailsComponent } from '../components/rate/details.component';
// **gulpimport**

export const RateRoutes: Routes = [
    {
        path: ':code',
        component: RateDetailsComponent
    }

];
