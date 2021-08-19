export interface SignInModel {
  username: string;
  password: string;
}

export interface ResSignInModel {
  data: {
    email: string,
    firstname: string,
    lastname: string,
    phonenumber: string,
    role: string,
    username: string,
    accessToken: string,
    refreshToken: string,
  };
  message: {
    name: string,
    description: string,
    statusCode: string,

  };
}
