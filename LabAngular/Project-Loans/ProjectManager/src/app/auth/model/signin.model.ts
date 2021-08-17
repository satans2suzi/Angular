export interface SignIn {
  username : string;
  password : string;
}

export interface ResSignIn {
  accessToken: string,
  refreshToken: string;
  data : {
    email: string,
    firstname: string,
    lastname: string,
    phonenumber: string,
    role: string,
    username: string
  }
  message: {
    name: string,
    description: string,
    statusCode: string
  }
}
