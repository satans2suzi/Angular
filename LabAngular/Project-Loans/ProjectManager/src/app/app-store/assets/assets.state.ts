import { IResAssetModel} from '../../shared/models/assets/asset.model';


export interface IAssetsState {
  items: IResAssetModel[];
  error?: string;
  status: 'idle' | 'loading' | 'error';
  message?: string;
  paginator?: {
    recordPerPage: number,
    recordData: number,
    page: number,
    totalPage: number
  }
}
