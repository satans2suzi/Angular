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
  ASSETS_BASE_URL: 'http://localhost:3000/api/asset/',
  ASSETS: {
    GET_ALL_ASSETS: 'list',
    GET_ASSETS_DETAILS: 'view',
    CREATE_ASSETS: 'create',
    UPDATE_ASSETS: 'update',
    DELETE_ASSETS: 'delete',
    SEARCH_ASSETS: 'search'
  },
  ASSETS_PLACED_BASE_URL: 'http://localhost:3000/api/asset_placed/',
  FUNC_URL: {
    GET_ALL: 'list',
    GET_DETAILS: 'view',
    CREATE: 'create',
    UPDATE: 'update',
    DELETE: 'delete',
    SEARCH: 'search'
  },
  AUTH_BASE_URL: 'http://localhost:3000/api/auth/',
  AUTH: {
    REGISTER: 'register',
    LOGIN: 'login',
    LOG_OUT: 'logout',
    GET_ALL_USER: 'list',
    DELETE_USER: 'delete',
    UPDATE_USER: 'update',

  }
};
