
export interface IResAssetsModel {
  data: IResAssetModel[];
  recordData: number;
  recordPerPage: number,
  page: number,
  totalPage: number
  mesasge: IMessageModel;
}

export interface IResAssetModel {
  _id: string,
  asset_name: string,
  asset_brand: string,
  asset_type: string,
  asset_serial_number: string,
  asset_date_of_issue: string,
  asset_placed: [],
  asset_price: number
}

interface IMessageModel {
  description: string;
  name: string;
  statusCode: number;
}


export interface IFormAssetModel {
  asset_name: string;
  asset_brand: string;
  asset_type: string;
  asset_serial_number: number;
  asset_date_of_issue: number;
  asset_price: number;
}