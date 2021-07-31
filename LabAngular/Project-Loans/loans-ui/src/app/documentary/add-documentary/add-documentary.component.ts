import {AfterViewInit, Component, DoCheck, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {DocumentaryService} from '../../services/documentary.service';
import {DocumentaryModel} from '../../models/documentary.model';
import {Router} from '@angular/router';
import {File} from '@angular/compiler-cli/src/ngtsc/file_system/testing/src/mock_file_system';
import {HttpEventType, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {map} from 'rxjs/operators';
import WebViewer from '@pdftron/webviewer';

@Component({
  selector: 'app-add-documentary',
  templateUrl: './add-documentary.component.html',
  styleUrls: ['./add-documentary.component.css']
})
export class AddDocumentaryComponent implements OnInit, AfterViewInit, DoCheck {

  @ViewChild('viewer', {static: true, read: ElementRef}) viewerRef?: ElementRef;
  title = 'Thêm công văn';
  // @ts-ignore
  documentFile: File;
  isLoadingResults = 0;
  message = '';
  url: any;
  value = 0;

  constructor(private formBuilder: FormBuilder,
              private documentaryService: DocumentaryService,
              private router: Router) {
  }

  formCreateDocumentary: any;
  pdfSource = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';

  ngOnInit(): void {
    this.formCreateDocumentary = this.formBuilder.group({
      documentName: [],
      documentNumber: [],
      documentType: [],
      documentAddress: [],
      documentDate: [],
      documentSecret: [],
      documentWhoSign: [],
      documentFile: [],
      documentBox: [],
      documentStatus: []
    });

    console.log('OnInit: ' + this.url);
  }

  ngDoCheck(): void {
    // this.ngOnInit();
    // this.ngAfterViewInit();
  }

  onFileSelect(event: any): any {
    if (event.target.files.length > 0) {
      this.documentFile = (event.target.files[0] as File);
      console.log(this.documentFile);
      const reader = new FileReader();
      reader.onload = () => {
        this.url = reader.result;

      };

      reader.readAsDataURL(event.target.files[0]);
    }
    event.srcElement.value = null;

  }


  createDocument(): any {
    // @ts-ignore
    this.documentaryService.createDocumentary(this.documentFile, this.formCreateDocumentary.value)
      .pipe(map((event) => {
          // @ts-ignore
          switch (event.type) {
            case HttpEventType.UploadProgress:
              // @ts-ignore
              this.isLoadingResults = Math.round(event.loaded * 100 / event.total);
              // @ts-ignore
              console.log('Upload:' + Math.round(event.loaded * 100 / event.total));
              this.router.navigate(['/documentary']);
              break;
            case HttpEventType.Response:
              console.log(event);
          }
        }
      )).subscribe((event: any) => {
      if (typeof (event) === 'object') {
        console.log(event);
      }
    }, (err: any) => {
      console.log(err);
    });
  }

  ngAfterViewInit(): any {
    WebViewer({
      path: '../../assets/lib',
      initialDoc: ''
    }, this.viewerRef?.nativeElement).then(instance => {
      console.log('aaa' + this.url);
      const {documentViewer, annotationManager, SaveOptions} = instance.Core;
      instance.UI.setTheme('dark');
      instance.UI.setHeaderItems(header => {
        header.push({
          type: 'actionButton',
          img: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/></svg>',
          onClick: async () => {
            const saveOptions = SaveOptions;
            const doc = documentViewer.getDocument();
            const xfdfString = await annotationManager.exportAnnotations();
            const options = {
              xfdfString,
              flags: saveOptions.LINEARIZED,
              downloadType: 'pdf'
            };
            const data = await doc.getFileData(options);
            const arr = new Uint8Array(data);
            const blob = new Blob([arr], {type: 'application/pdf'});
          }
        });
      });
    });
  }
}
