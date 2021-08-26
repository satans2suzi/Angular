import { LoginComponent } from './components/auth/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/auth/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PostsComponent } from './components/posts/posts.component';
import {DashboardComponent} from './components/dashboard/dashboard/dashboard.component';
import {AuthGuard} from './shared/guard/auth/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'posts',
    component: PostsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'assets',
    loadChildren: () => import('./components/assets/assets.module').then(m => m.AssetsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'documentary',
    loadChildren: () => import('./components/documentary/documentary.module').then(m => m.DocumentaryModule),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
