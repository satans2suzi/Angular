import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'assets', loadChildren: () => import('./assets/assets.module').then(m => m.AssetsModule) }, { path: 'documentary', loadChildren: () => import('./documentary/documentary.module').then(m => m.DocumentaryModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
