import { Routes } from '@angular/router';
import { PublicHomeComponent } from '../components/public/home.component';



export const PublicRoutes: Routes = [
    {
        path: '',
        component: PublicHomeComponent,
        title: 'Public Home'
    }
    // **gulproute**
];
