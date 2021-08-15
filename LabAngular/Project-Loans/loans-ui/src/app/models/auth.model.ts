export class RegisterModel {
  firstname = '';
  lastname = '';
  username = '';
  phonenumber = '';
  email = '';
  password = '';
}

export class ResRegisterModel {
  data = {
    email: '',
    username: '',
    firstname: '',
    lastname: '',
    phonenumber: '',
    role: '',
  };
  message = {
    description: '',
    name: '',
    statusCode: 0
  };
  error = '';

}


export class LoginModel {
  username = '';
  password = '';
}

export class ResLoginModel {
  data = {
    email: '',
    username: '',
    firstname: '',
    lastname: '',
    phonenumber: '',
    role: ''
  };
  message = {
    description: '',
    name: '',
    statusCode: 0
  };
  accessToken = '';
  refreshToken = '';
  error = '';
}
