import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {LogoutComponent} from "./auth/logout/logout.component";
import {ForgotComponent} from "./auth/forgot/forgot.component";
import {NewUserComponent} from "./auth/new-user/new-user.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "", component: DashboardComponent},
  { path: "login", component: LoginComponent},
  { path: "logout", component: LogoutComponent},
  { path: "forgot", component: ForgotComponent},
  { path: "new-user", component: NewUserComponent},
  { path: 'customers', loadChildren: () => import('./custormers/custormers.module').then(m => m.CustormersModule) },
  { path: 'audit', loadChildren: () => import('./audit/audit.module').then(m => m.AuditModule) },
  { path: 'invoices', loadChildren: () => import('./invoices/invoices.module').then(m => m.InvoicesModule) },
  { path: 'loans', loadChildren: () => import('./loans/loans.module').then(m => m.LoansModule) },
  { path: 'payments', loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule) },
  { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  { path: 'loan-types', loadChildren: () => import('./loan-types/loan-types.module').then(m => m.LoanTypesModule) },
  { path: 'reports', loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule) },
  { path: 'activity-audit', loadChildren: () => import('./activity-audit/activity-audit.module').then(m => m.ActivityAuditModule) },
  //Quản lý offenses
  { path: 'offenses', loadChildren: () => import('./offenses/offenses.module').then(m => m.OffensesModule) },
  //Quản lý công văn
  { path: 'documentary', loadChildren: () => import('./documentary/documentary.module').then(m => m.DocumentaryModule) },
  //Quản lý tài sản
  { path: 'assets-mananger', loadChildren: () => import('./assets-manager/assets-manager.module').then(m => m.AssetsManagerModule) },
  //Quản lý suricata
  { path: 'suricata-mananger', loadChildren: () => import('./suricata-manager/suricata-manager.module').then(m => m.SuricataManagerModule) },
  { path: "**", component: PageNotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
