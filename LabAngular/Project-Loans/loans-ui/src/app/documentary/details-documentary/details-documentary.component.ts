import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DocumentaryService} from '../../services/documentary.service';
import {DocumentaryModel} from '../../models/documentary.model';
import WebViewer from '@pdftron/webviewer';

@Component({
  selector: 'app-details-documentary',
  templateUrl: './details-documentary.component.html',
  styleUrls: ['./details-documentary.component.css']
})
export class DetailsDocumentaryComponent implements OnInit {
  @ViewChild('viewer', {static: true, read: ElementRef}) public viewerRef?: ElementRef;
  title = 'Chi tiết công văn';
  documentID = '';
  documentDetails: DocumentaryModel = new DocumentaryModel();

  constructor(private activatedRoute: ActivatedRoute,
              private documentaryServices: DocumentaryService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(data => {
        this.documentID = data.id;
      });
    this.documentaryServices.viewDocumentary(this.documentID)
      .subscribe(documentData => {
        this.documentDetails = documentData;
        WebViewer({
          path: '../../assets/lib',
          initialDoc: this.documentDetails.documentFile
        }, this.viewerRef?.nativeElement).then(instance => {
          const { documentViewer, annotationManager, SaveOptions } = instance.Core;
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
                const blob = new Blob([arr], { type: 'application/pdf' });

                // add code for handling Blob here
              }
            });
          });
        }, err => {
          console.log(err);
        });
      });
  }
}
