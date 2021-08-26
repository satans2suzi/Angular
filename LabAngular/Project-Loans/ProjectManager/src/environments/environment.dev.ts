export const environment = {
  production: false,
  BASE_URL: 'http://localhost:3000/',
  DOCUMENT_BASE_URL: 'http://localhost:3000/api/documentary/',
  ASSETS_BASE_URL: 'http://localhost:3000/api/asset/',
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
    CHECK_USER: 'check-user',
    CHECK_EMAIL: 'check-email'
  }
};
