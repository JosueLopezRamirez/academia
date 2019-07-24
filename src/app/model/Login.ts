export class Login{

  private login: boolean;

  constructor(){
    this.login = false;
  }

  getLoginStatus(): boolean {
    return this.login;
  }

  setLoginStatus(login: boolean): void{
    this.login = login;
  }
}
