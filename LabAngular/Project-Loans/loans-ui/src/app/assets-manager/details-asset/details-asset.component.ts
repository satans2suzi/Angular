import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssetService } from 'src/app/services/asset.service';
import { ResAssetModel } from '../../models/asset.model';

@Component({
  selector: 'app-details-asset',
  templateUrl: './details-asset.component.html',
  styleUrls: ['./details-asset.component.css']
})
export class DetailsAssetComponent implements OnInit {
  assetID = '';
  detailsAsset: ResAssetModel = new ResAssetModel;
  assetPlaced: any[] = [];
  page = 1;
  pageSize = 10;
  lengthDocumentList = 0;
  isUpdate = false;
  title = 'Chi tiết tài sản'
  constructor(private activatedRoute: ActivatedRoute,
    private assetService: AssetService) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(data => {
        this.assetID = data.id;
      });
    this.assetService.getDetailsAsset(this.assetID)
      .subscribe(res => {
        this.detailsAsset = res
        this.assetPlaced = res.data.asset_placed;
        console.log(res)
      })
  }

  onUpdate(): any {
    this.isUpdate = !this.isUpdate;
  }

  deleteAssetPlaced(id: String) {
    this.assetService.deleteAssetPlaced(id)
      .subscribe(res => {
        console.log(res)
      })
  }

}
