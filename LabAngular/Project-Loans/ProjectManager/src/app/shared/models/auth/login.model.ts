export interface IFormLoginModel {
  username: string;
  password: string;
}

export interface IResLoginModel {
  data: IDataLoginModel;
  message: Message | null;
}

export interface IDataLoginModel{
  id: string;
  email: string;
  fullname: string;
  phonenumber: string;
  role: string;
  username: string;
  accessToken: string;
  refreshToken: string;
}
interface Message {
  name: string;
  description: string;
  statusCode: string;
}


