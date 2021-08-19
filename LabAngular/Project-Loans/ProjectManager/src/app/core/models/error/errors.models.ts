export  interface ErrorModel {
  error: {
    message: {
      description: string,
      name: string,
      statusCode: number
    }
  };
  headers:{

  };
  message: string;
  name: string;
  ok: boolean;
  status: number;
  statusText: string;
  url: string;
}
