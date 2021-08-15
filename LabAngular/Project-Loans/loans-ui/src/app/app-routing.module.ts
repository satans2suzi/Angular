import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { CheckLazyGuard } from './guards/check-lazy.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
    canActivate: [AuthGuard],
    canLoad: [CheckLazyGuard]
  },
  // Quản lý offenses
  {
    path: 'offenses',
    loadChildren: () => import('./offenses/offenses.module').then(m => m.OffensesModule),
    canActivate: [AuthGuard],
    canLoad: [CheckLazyGuard]
  },
  // Quản lý công văn
  {
    path: 'documentary',
    loadChildren: () => import('./documentary/documentary.module').then(m => m.DocumentaryModule),
    canActivate: [AuthGuard],
    canLoad: [CheckLazyGuard]
  },
  // Quản lý tài sản
  {
    path: 'assets-mananger',
    loadChildren: () => import('./assets-manager/assets-manager.module').then(m => m.AssetsManagerModule),
    canActivate: [AuthGuard],
    canLoad: [CheckLazyGuard]
  },
  // Quản lý suricata
  {
    path: 'suricata-mananger',
    loadChildren: () => import('./suricata-manager/suricata-manager.module').then(m => m.SuricataManagerModule),
    canActivate: [AuthGuard],
    canLoad: [CheckLazyGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    canActivate: [AuthGuard]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
