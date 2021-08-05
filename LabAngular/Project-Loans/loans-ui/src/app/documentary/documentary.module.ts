import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';


import {DocumentaryRoutingModule} from './documentary-routing.module';
import {DocumentaryComponent} from './documentary.component';
import {AddDocumentaryComponent} from './add-documentary/add-documentary.component';
import {UpdateDocumentaryComponent} from './update-documentary/update-documentary.component';
import {DeleteDocumentaryComponent} from './delete-documentary/delete-documentary.component';
import {SearchDocumentaryComponent} from './search-documentary/search-documentary.component';
import {ListDocumentaryComponent} from './list-documentary/list-documentary.component';
import {DetailsDocumentaryComponent} from './details-documentary/details-documentary.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// import { MaterialFileInputModule } from 'ngx-material-file-input';


@NgModule({
  declarations: [
    DocumentaryComponent,
    AddDocumentaryComponent,
    UpdateDocumentaryComponent,
    DeleteDocumentaryComponent,
    SearchDocumentaryComponent,
    ListDocumentaryComponent,
    DetailsDocumentaryComponent
  ],
  imports: [
    CommonModule,
    DocumentaryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    NgbModule
  ],
  exports: [
    DocumentaryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class DocumentaryModule {
}
