import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {DocumentaryService} from "../../services/documentary.service";
import {DocumentaryModel} from "../../models/documentary.model";
import { Router } from '@angular/router'
import {File} from "@angular/compiler-cli/src/ngtsc/file_system/testing/src/mock_file_system";

@Component({
  selector: 'app-add-documentary',
  templateUrl: './add-documentary.component.html',
  styleUrls: ['./add-documentary.component.css']
})
export class AddDocumentaryComponent implements OnInit, AfterViewInit {

  title: string = 'Thêm công văn'
  pdfFile: null;
  isLoadingResults = false
  constructor( private formBuilder: FormBuilder,
               private documentaryService: DocumentaryService,
               private router: Router) { }
  formCreateDocumentary: any;
  documentaryObj: DocumentaryModel = new DocumentaryModel();
  pdfSource =  "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  ngOnInit(): void {
    this.formCreateDocumentary = this.formBuilder.group({
      documentName: [],
      documentNumber: [],
      documentType: [],
      documentAddress: [],
      documentDate: [],
      documentSecret: [],
      documentWhoSign: [],
      documentImg: [],
      documentBox: [],
      documentStatus: []
    });
  }
  ngAfterViewInit() {

  }
  createDocument(){
    this.documentaryObj.documentName = this.formCreateDocumentary.value.documentName
    this.documentaryObj.documentNumber = this.formCreateDocumentary.value.documentNumber
    this.documentaryObj.documentType = this.formCreateDocumentary.value.documentType
    this.documentaryObj.documentAddress = this.formCreateDocumentary.value.documentAddress
    this.documentaryObj.documentDate = this.formCreateDocumentary.value.documentDate
    this.documentaryObj.documentSecret = this.formCreateDocumentary.value.documentSecret
    this.documentaryObj.documentWhoSign = this.formCreateDocumentary.value.documentWhoSign
    // this.documentaryObj.documentImg = this.formCreateDocumentary.file?.documentImg
    this.documentaryObj.documentBox = this.formCreateDocumentary.value.documentBox
    this.documentaryObj.documentStatus = this.formCreateDocumentary.value.documentStatus
    // this.documentaryService.createDocumentary(this.documentaryObj)
    //   .subscribe(res =>{
    //     alert('uploaded')
    //   },err => {
    //     alert("Something Wrong");
    //   })
    this.isLoadingResults = true;
    console.log(this.formCreateDocumentary.value)
    this.documentaryService.createDocumentary(this.formCreateDocumentary.get('documentImg').value._files[0], this.documentaryObj )
      .subscribe((res: any) => {
        this.isLoadingResults = false;
        if (res.body) {
          this.router.navigate(['/']);
        }
      }, (err: any) => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

  onFileSelect(event: any) {
    // @ts-ignore
    // let file = (event.target as HTMLInputElement).files[0];
    // this.formCreateDocumentary.patchValue({ documentImg: file });
    // const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
    // if (file && allowedMimeTypes.includes(file.type)) {
    //   const reader = new FileReader();
    //   reader.onload = () => {
    //     this.imageData = reader.result as string;
    //   };
    //   reader.readAsDataURL(file);
    // }
    console.log(event)
    if (event.target.files.length > 0) {
      const file = event.target.File.name;
      this.pdfFile = file;
    }

  }

  onSubmit() {

  }

}
