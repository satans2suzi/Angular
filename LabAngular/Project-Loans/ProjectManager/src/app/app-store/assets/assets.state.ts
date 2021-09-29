import { EntityState } from '@ngrx/entity';
import { IResAssetModel} from '../../shared/models/assets/asset.model';
import {IResAssetPlacementModel} from '../../shared/models/assets/asset-placement.model';


export interface IAssetsState{
  items: IResAssetModel[];
  position: IResAssetPlacementModel[];
  error?: string;
  status: 'idle' | 'loading' | 'error';
  message?: string;
  paginator?: {
    recordData: number,
    page: number,
    totalPage: number
  }
}
