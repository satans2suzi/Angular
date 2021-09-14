import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment.dev';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IFormAssetModel, IResAssetModel, IResAssetsModel} from '../../models/assets/asset.model';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  BASE_URL = environment.ASSETS_BASE_URL;
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
  };

  constructor(private readonly _httpClient: HttpClient) {
  }

  getAssets(): Observable<IResAssetsModel> {
    const url = this.BASE_URL + environment.FUNC_URL.GET_ALL;
    return this._httpClient.get<IResAssetsModel>(url);
  }

  getAssetsPerPage(page: string): Observable<IResAssetsModel>{
    const url = this.BASE_URL + environment.FUNC_URL.GET_ALL + '?page=' + page;
    return this._httpClient.get<IResAssetsModel>(url);
  }

  getAsset(id: string): Observable<IResAssetsModel> {
    const url = this.BASE_URL + environment.FUNC_URL.GET_DETAILS + '?_id=' + id;
    return this._httpClient.get<IResAssetsModel>(url);
  }

  createAsset(data: IFormAssetModel): Observable<IResAssetsModel> {
    const url = this.BASE_URL + environment.FUNC_URL.CREATE;
    return this._httpClient.post<IResAssetsModel>(url, data, this.httpOptions);
  }

  deleteAsset(id: string): Observable<IResAssetsModel>{
    const url = this.BASE_URL + environment.FUNC_URL.DELETE + '?_id=' + id;
    return this._httpClient.delete<IResAssetsModel>(url);
  }

  updateAsset(data: IFormAssetModel, id: string) {
    const url = this.BASE_URL + environment.FUNC_URL.UPDATE + '?_id=' + id;
    return this._httpClient.put(url, this.httpOptions);
  }

}
