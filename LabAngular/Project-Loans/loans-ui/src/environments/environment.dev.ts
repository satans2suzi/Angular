export const environment = {
  production: false,
  BASE_URL: 'http://localhost:3000/',
  DOCUMENT_BASE_URL: 'http://localhost:3000/api/documentary/',
  DOCUMENTARY: {
    CREATE_DOCUMENT: 'create',
    GET_ALL_DOCUMENT: 'list',
    GET_DOCUMENT_DETAILS: 'view',
    UPDATE_DOCUMENT: 'update',
    DELETE_DOCUMENT: 'delete',
    SEARCH_DOCUMENT: 'search'
  },
  ASSETS: {
    GET_ALL_ASSETS: 'list',
    GET_ASSETS_DETAILS: 'view',
    UPDATE_ASSETS: 'update',
    DELETE_ASSETS: 'delete',
    SEARCH_ASSETS: 'search'
  }
};
