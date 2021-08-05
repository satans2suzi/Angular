import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  // Quản lý offenses
  {
    path: 'offenses',
    loadChildren: () => import('./offenses/offenses.module').then(m => m.OffensesModule)
  },
  // Quản lý công văn
  {
    path: 'documentary',
    loadChildren: () => import('./documentary/documentary.module').then(m => m.DocumentaryModule)
  },
  // Quản lý tài sản
  {
    path: 'assets-mananger',
    loadChildren: () => import('./assets-manager/assets-manager.module').then(m => m.AssetsManagerModule)
  },
  // Quản lý suricata
  {
    path: 'suricata-mananger',
    loadChildren: () => import('./suricata-manager/suricata-manager.module').then(m => m.SuricataManagerModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
