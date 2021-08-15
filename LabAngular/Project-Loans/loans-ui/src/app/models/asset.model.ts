export class AssetModel {
  asset_name = '';
  asset_brand = '';
  asset_type = '';
  asset_serial_number = '';
  asset_date_of_issue = '';
  asset_placed = [{
    name_placed: '',
    date_of_invoice: ''
  }];
  asset_price = 0;
}

export class ResAssetModel {
  data = {
    _id: '',
    asset_name: '',
    asset_brand: '',
    asset_type: '',
    asset_serial_number: '',
    asset_date_of_issue: '',
    asset_placed: [{
      _id: '',
      name_placed: '',
      date_of_invoice: ''
    }],
    asset_price: 0
  };
  message = {
    description: '',
    name: '',
    statusCode: 0
  }
  debugInfo = {}
}

export class AssetPlacedModel {
  name_placed = '';
  date_of_invoice = '';
}

export class ResAssetPlaceModel {
  data = {
    _id: '',
    name_place: '',
    date_of_invoice: ''
  };
  message = {
    description: '',
    name: '',
    statusCode: 0
  }
}
