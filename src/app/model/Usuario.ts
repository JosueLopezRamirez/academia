export class Usuario {

  private username: string;
  private password: string;
  private statusLogin: boolean;
  private category: number;

  constructor(username: string, password: string, statusLogin: boolean, category: number){
    this.username = username || "";
    this.password = password || "";
    this.statusLogin = statusLogin || false;
    this.category = category || 0;
  }

  //Getters and Setters

  getUsername(){return this.username;}

  setUsername(username: string){this.username = username;}

  getPassword(){return this.password;}

  setPassword(password: string){this.password = password;}

  getStatusLogin(){return this.statusLogin;}

  setStatusLogin(statusLogin: boolean){this.statusLogin = statusLogin;}

  getCategory(){return this.category;}

  setCategory(category: number){this.category = category;}
}
