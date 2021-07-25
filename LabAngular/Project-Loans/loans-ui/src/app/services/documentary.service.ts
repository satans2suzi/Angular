import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpRequest} from "@angular/common/http";
import { environment } from "../../environments/environment.dev";
import {Observable, throwError} from "rxjs";
import {DocumentaryModel} from "../models/documentary.model";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DocumentaryService {

  constructor(private httpClient: HttpClient
  ) { }

  // private handleError(error: HttpErrorResponse): any {
  //   if (error.error instanceof ErrorEvent) {
  //     console.error('An error occurred:', error.error.message);
  //   } else {
  //     console.error(
  //       `Backend returned code ${error.status}, ` +
  //       `body was: ${error.error}`);
  //   }
  //   return throwError(
  //     'Something bad happened; please try again later.');
  // }
  getDocumentary(): Observable<DocumentaryModel> {
    let url = environment.DOCUMENT_BASE_URL+environment.DOCUMENTARY.GET_ALL_DOCUMENT
    return this.httpClient.get<DocumentaryModel>(url)      ;
  }

  // createDocumentary(bodyDataDocument:any): Observable<DocumentaryModel>{
  //   let options = {
  //     headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  //   }
  //   let url = environment.DOCUMENT_BASE_URL+environment.DOCUMENTARY.CREATE_DOCUMENT
  //   return this.httpClient.post<DocumentaryModel>(url, bodyDataDocument,options)
  // }


  //Demo
  createDocumentary(file: File, bodyDataDocument: DocumentaryModel): Observable<DocumentaryModel>{
    const formData = new FormData();
    formData.append('documentName', bodyDataDocument.documentName);
    formData.append('documentNumber', bodyDataDocument.documentNumber);
    formData.append('documentType', bodyDataDocument.documentType);
    formData.append('documentAddress', bodyDataDocument.documentAddress);
    formData.append('documentDate', bodyDataDocument.documentDate);
    formData.append('documentSecret', bodyDataDocument.documentSecret);
    formData.append('documentWhoSign', bodyDataDocument.documentWhoSign);
    formData.append('documentImg', file);
    formData.append('documentBox', bodyDataDocument.documentBox);
    formData.append('documentStatus', bodyDataDocument.documentStatus);
    const header = new HttpHeaders();
    const params = new HttpParams();
    const options = {
      params,
      reportProgress: true,
      headers: header
    };
    let url = environment.DOCUMENT_BASE_URL+environment.DOCUMENTARY.CREATE_DOCUMENT
    // const req = new HttpRequest('POST', url, formData, options);
    return this.httpClient.post<DocumentaryModel>(url,formData,options);
  }


  viewDocumentary(id:any): Observable<DocumentaryModel>{
      let url = environment.DOCUMENT_BASE_URL+environment.DOCUMENTARY.GET_DOCUMENT_DETAILS+'?_id='+id
      return this.httpClient.get<DocumentaryModel>(url);
  }
  //
  // editDocumentary(id, customerObj){
  //
  // }
  //
  deleteDocumentary(id:any): Observable<DocumentaryModel>{
    let url = environment.DOCUMENT_BASE_URL+environment.DOCUMENTARY.DELETE_DOCUMENT+'?_id='+id;
    return this.httpClient.delete<DocumentaryModel>(url)
  }
  //
  // searchDocumentary(keyword){
  //
  // }
}
