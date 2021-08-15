import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.dev';
import {
  AssetModel,
  AssetPlacedModel,
  ResAssetModel,
  ResAssetPlaceModel
} from '../models/asset.model';
@Injectable({
  providedIn: 'root'
})
export class AssetService {

  constructor(private httpClient: HttpClient) { }


  getListAsset(): Observable<ResAssetPlaceModel> {
    const url = environment.ASSETS_BASE_URL + environment.FUNC_URL.GET_ALL
    return this.httpClient.get<ResAssetPlaceModel>(url)
      .pipe(map((res: ResAssetPlaceModel) => {
        return res;
      }));
  }

  getDetailsAsset(id: String): Observable<ResAssetModel> {
    const url = environment.ASSETS_BASE_URL + environment.FUNC_URL.GET_DETAILS + '?_id=' + id
    return this.httpClient.get<ResAssetModel>(url)
      .pipe(map((res: ResAssetModel) => {
        return res;
      }));
  }

  createAsset(data: AssetModel): Observable<ResAssetModel> {
    const url = environment.ASSETS_BASE_URL + environment.FUNC_URL.CREATE
    return this.httpClient.post<ResAssetModel>(url, data)
      .pipe(map((res: ResAssetModel) => {
        return res;
      }));
  }

  deleteAsset(id: String): Observable<ResAssetModel> {
    const url = environment.ASSETS_BASE_URL + environment.FUNC_URL.DELETE + '?_id=' + id
    return this.httpClient.delete<ResAssetModel>(url)
      .pipe(map((res: ResAssetModel) => {
        return res;
      }));
  }

  updateAsset(id: String, data: any): Observable<any> {
    const url = environment.ASSETS_BASE_URL + environment.FUNC_URL.UPDATE + '?_id=' + id;
    return this.httpClient.put<any>(url, data)
      .pipe(map((res: any) => {
        return res;
      }));
  }

  createAssetPlaced(id_asset: String, data: AssetPlacedModel): Observable<ResAssetPlaceModel> {
    const url = environment.ASSETS_PLACED_BASE_URL + `${id_asset}/` + environment.FUNC_URL.CREATE
    return this.httpClient.post<ResAssetPlaceModel>(url, data)
      .pipe(map((res: ResAssetPlaceModel) => {
        return res;
      }));
  }

  deleteAssetPlaced(id: String): Observable<any> {
    const url = environment.ASSETS_PLACED_BASE_URL + environment.FUNC_URL.DELETE + '?_id=' + id;
    return this.httpClient.delete<any>(url)
      .pipe(map((res: any) => {
        return res;
      }));
  }


}


