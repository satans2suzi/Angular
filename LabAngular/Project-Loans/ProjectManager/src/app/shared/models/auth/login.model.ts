export interface FormLoginModel {
  username: string;
  password: string;
}

export interface ResLoginModel {
  data: {
    email: string;
    fullname: string;
    phonenumber: string;
    role: string;
    username: string;
    accessToken: string;
    refreshToken: string;
  };
  message: {
    name: string,
    description: string,
    statusCode: string,

  };
}
