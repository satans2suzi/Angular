export interface IResAssetsPlacementModel {
  data: IResAssetPlacementModel[];
  mesasge: IMessageModel,
  totalPage: number,
  record: number
}

export interface IResAssetPlacementModel {
  _id: string,
  name_placed: string,
  date_of_invoice: string
}

interface IMessageModel {
  description: string;
  name: string;
  statusCode: number;
}


export interface IFormAssetPlacementModel {
  name_placed: string;
  date_of_invoice: string;
}
