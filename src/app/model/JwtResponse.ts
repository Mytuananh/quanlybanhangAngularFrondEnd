export class JwtResponse {
  public token: string;
  public name: string;
  public roles: any;
  public avatar: string;


  constructor(token: string, name: string, roles: any, avatar: string) {
    this.token = token;
    this.name = name;
    this.roles = roles;
    this.avatar = avatar;
  }
}
