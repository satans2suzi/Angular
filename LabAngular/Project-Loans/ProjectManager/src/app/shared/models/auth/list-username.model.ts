export interface ResponseListUsernameModel{
  message: {
    name: string;
      statusCode: number;
      description: string;
  };
  data:  [{
    id: string;
    username: string;
  }];
}
