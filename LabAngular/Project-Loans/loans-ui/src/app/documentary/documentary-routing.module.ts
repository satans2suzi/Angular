import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentaryComponent } from './documentary.component';
import {ListDocumentaryComponent} from './list-documentary/list-documentary.component';
import {AddDocumentaryComponent} from './add-documentary/add-documentary.component';
import {UpdateDocumentaryComponent} from './update-documentary/update-documentary.component';
import {DeleteDocumentaryComponent} from './delete-documentary/delete-documentary.component';
import {SearchDocumentaryComponent} from './search-documentary/search-documentary.component';
import {DetailsDocumentaryComponent} from './details-documentary/details-documentary.component';

const routes: Routes = [
  // { path: '', component: DocumentaryComponent },
  { path: '', component: ListDocumentaryComponent },
  { path: 'add-documentary', component: AddDocumentaryComponent },
  { path: 'update-documentary/:id', component: UpdateDocumentaryComponent },
  { path: 'delete-documentary/:id', component: DeleteDocumentaryComponent },
  { path: 'search-documentary/:id', component: SearchDocumentaryComponent },
  { path: 'details-documentary/:id', component: DetailsDocumentaryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentaryRoutingModule { }
