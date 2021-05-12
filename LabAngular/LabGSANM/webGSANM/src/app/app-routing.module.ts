import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaoCaoComponent } from './bao-cao/bao-cao.component';
import { CongViecComponent } from './cong-viec/cong-viec.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { DuLieuComponent } from './du-lieu/du-lieu.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NhanVienComponent } from './nhan-vien/nhan-vien.component';
import { RegisterComponent } from './register/register.component';
import { SignupComponent } from './signup/signup.component';
import { TaiSanComponent } from './tai-san/tai-san.component';

const routes: Routes = [
  { path: 'homepage', component: HomeComponentComponent },
  { path: 'baocao', component: BaoCaoComponent },
  { path: 'congviec', component: CongViecComponent },
  { path: 'dulieu', component: DuLieuComponent },
  { path: 'taisan', component: TaiSanComponent },
  { path: 'nhanvien', component: NhanVienComponent },
  { path: '', component: SignupComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contact', component: ContactFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
