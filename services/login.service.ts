import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

 

// current user
 public getCurrentUser(){
   return this.http.get(`${baseUrl}/current-user`);
 }

 //generate token
 
 public generateToken(loginData:any){
 
  return this.http.post(`${baseUrl}/generate-token` , loginData);

 }

 // login user: set token is local storage

 public loginUser(token:any)
 {
   localStorage.setItem('token',token);
   return true;
 }

//isLogin
public isLoggedIn()
{
  let tokenStr = localStorage.getItem('token');
  if(tokenStr == undefined || tokenStr == '' || tokenStr == null)
  {
 return false;
  } 
  else{
    return true;
  }
}

//logout
public logout(){
  localStorage.removeItem('token');
  return true;
}

//get token
public getToken(){
  return localStorage.getItem('token');
}

//set userdetails
public setUser(user:any)
{
localStorage.setItem('user',JSON.stringify(user));
}


// get user
public getUser(){
  let userStr =localStorage.getItem('user');
  if(userStr!=null){
    return JSON.parse(userStr);
  }
  else{
    this.logout();
    return null;
  }
}

// user  role
public getUserRole(){
  let user = this.getUser();
  return user.authorities[0].authority;
}



}
