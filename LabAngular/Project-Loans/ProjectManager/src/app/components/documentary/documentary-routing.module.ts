import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListDocumentaryComponent} from './list-documentary/list-documentary.component';

const routes: Routes = [
  {
    path: '',
    component: ListDocumentaryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentaryRoutingModule {
}
