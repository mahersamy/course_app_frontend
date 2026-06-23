import { Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';
import { courseRoute } from './features/courses/route';
import { NotFound } from './layout/not-found/not-found';

export const routes: Routes = [
    {
        path: '',
        component: MainLayout,
        children: [
            {
                path: '',
                redirectTo: 'courses',
                pathMatch: 'full'
            },
            {
                path: 'main',
                redirectTo: 'courses',
                pathMatch: 'full'
            },
            ...courseRoute
        ]
    },
    {
        path: '**',
        component: NotFound
    }
];
