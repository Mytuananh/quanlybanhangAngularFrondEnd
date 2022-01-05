import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {SignUpForm} from '../model/SignUpForm';
import {Observable} from 'rxjs';
import {SignInForm} from '../model/SignInForm';
import {JwtResponse} from '../model/JwtResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //API_LOCAL
  // private API_SIGNUP = environment.API_LOCAL+'signup';
  //API_SERVE
  data: boolean;
  private API_SIGNUP= environment.API_SERVE+'signup';
  private API_SIGNIN = environment.API_SERVE+'signin';
  constructor(private http: HttpClient) { }
  signUp(signUpForm: SignUpForm): Observable<any> {
    return this.http.post<any>(this.API_SIGNUP, signUpForm);
  }

  signIn(signInForm: SignInForm): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.API_SIGNIN, signInForm)
  }

  setData(data) {
    this.data = data;
  }

  getData(): boolean {
    return this.data;
  }
}
