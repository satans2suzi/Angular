import { analyzeAndValidateNgModules } from '@angular/compiler';
import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges, OnDestroy,
  OnInit, SimpleChanges
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { AssetModel } from '../models/asset.model';
import { AssetService } from '../services/asset.service';

@Component({
  selector: 'app-assets-manager',
  templateUrl: './assets-manager.component.html',
  styleUrls: ['./assets-manager.component.css']
})
export class AssetsManagerComponent implements OnInit {
  title = 'Tài sản';
  listAsset: any[] = [];
  page = 1;
  pageSize = 10;
  lengthAssetList = 0;
  assetForm: any;
  assetPlacedForm: any;
  idAssetCreate = '';

  constructor(private assetService: AssetService,
    private formBuilder: FormBuilder,
    private router: Router,) {
  }



  ngOnInit(): void {
    this.assetForm = this.formBuilder.group({
      asset_name: [],
      asset_brand: [],
      asset_type: [],
      asset_serial_number: [],
      asset_date_of_issue: [],
      asset_price: []
    })
    this.assetPlacedForm = this.formBuilder.group({
      name_placed: ['Phòng GSANM'],
      date_of_invoice: [moment(new Date(), 'YYYY-MM-DD')]
    })
    this.getAllAsset();
  }
  getAllAsset() {
    this.assetService.getListAsset()
      .subscribe(res => {
        this.listAsset = res.data as any;
        this.lengthAssetList = this.listAsset.length
        console.log(res)
      })
  }

  createAsset(): any {
    this.assetService.createAsset(this.assetForm.value)
      .subscribe(res => {
        if (res.message.statusCode === 201) {
          this.createAssetPlaced(res.data._id);
          const ref = document.getElementById('cancel');
          ref?.click();
          this.assetForm.reset();
          this.getAllAsset();
          alert(`Tạo tài sản ${res.data.asset_name} thành công`)
        }
      })
  }
  createAssetPlaced(id_asset: String): any {
    this.assetService.createAssetPlaced(id_asset, this.assetPlacedForm.value)
  }

  deleteAsset(asset_id: String): any {
    this.assetService.deleteAsset(asset_id)
      .subscribe(res => {
        if (res.message.statusCode === 200) {
          console.log(res)
          alert(`Xoá tài sản ${res}`)
        }
      })
    this.getAllAsset();
  }
}
