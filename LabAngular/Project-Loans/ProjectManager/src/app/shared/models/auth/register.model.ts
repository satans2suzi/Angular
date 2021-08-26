export interface FormRegisterModel {
  fullname: string;
  username: string;
  phonenumber: string;
  email: string;
  password: string,
}

export interface ResRegisterModel {
  data:{
    email: string;
    firstname: string;
    lastname: string
    phonenumber: string;
    role: string;
    username: string;
  }
  message: {
    description: string;
    name: string;
    statusCode: number;
  }
}


