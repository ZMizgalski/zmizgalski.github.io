import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./dashboard/dashboard.component').then(c => c.ZMDashboardComponent),
        children: [
            {
                path: '',
                redirectTo: 'welcome',
                pathMatch: 'full'
            },
            {
                path: 'welcome',
                loadComponent: () => import('./welcome/welcome.component').then(c => c.ZMWelcomeComponent)
            },
            {
                path: '404',
                loadComponent: () => import('./not-found/not-found.component').then(c => c.ZMNotFoundComponent)
            },
            {
                path: '**',
                redirectTo: '404',
                pathMatch: 'full'
            }
        ]
    }
];
