import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment.dev';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IFormAssetPlacementModel, IResAssetsPlacementModel} from '../../models/assets/asset-placement.model';

@Injectable({
  providedIn: 'root'
})
export class AssetsPlacementService {
  BASE_URL = environment.ASSETS_PLACED_BASE_URL;
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
  };

  constructor(private readonly _httpClient: HttpClient) {
  }

  getAssetsPlacement(data:string[], page: number): Observable<IResAssetsPlacementModel> {
    const url = this.BASE_URL + environment.FUNC_URL.GET_ALL + '?page=' + page;
    return this._httpClient.post<IResAssetsPlacementModel>(url, {'_idArray': data}, this.httpOptions);
  }

  getAssetPlacement(id: string): Observable<IResAssetsPlacementModel> {
    const url = this.BASE_URL + environment.FUNC_URL.GET_DETAILS + '?id=' + id;
    return this._httpClient.get<IResAssetsPlacementModel>(url);
  }

  createAssetPlaced(data: { [key: string]: string }, idAsset: string) {
    const url = this.BASE_URL + idAsset + environment.FUNC_URL.CREATE;
    return this._httpClient.post(url, data, this.httpOptions);
  }

  deleteAssetPlaced(id: string) {
    const url = this.BASE_URL + environment.FUNC_URL.DELETE + '?id=' + id;
    return this._httpClient.delete(url);
  }

  updateAssetPlaced(data: { [key: string]: string }, id: string) {
    const url = this.BASE_URL + environment.FUNC_URL.UPDATE + '?id=' + id;
    return this._httpClient.put(url, data, this.httpOptions);
  }

}
