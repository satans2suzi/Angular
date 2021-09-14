import {IResAssetPlacementModel} from '../../shared/models/assets/asset-placement.model';


export interface IAssetsPlacementState {
  items: IResAssetPlacementModel[]
  message?: string;
  status: 'idle' | 'loading' | 'error';
  error?: string;
  paginator: {
    totalPage: number
  }
}
