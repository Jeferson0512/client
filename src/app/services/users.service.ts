import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import {User} from '../User';

@Injectable()
export class UsersService {

  dominio: string = "http://localhost:3000";

  constructor(private http:Http) { }

  getUsers(): Observable<User[]>{
    return this.http.get(`${this.dominio}/api/user`)
    .map((response: Response) => response.json());
  }
  addUsers(newUser: User): Observable<User>{
    return this.http.post(`${this.dominio}/api/user`, newUser)
    .map((response: Response) => response.json());
  }
  deleteUsers(id): Observable<User>{
    return this.http.delete(`${this.dominio}/api/user/${id}`)
    .map((response: Response) => response.json());
  }
  updateUsers(newUser){
    return this.http.put(`${this.dominio}/api/user/${newUser._id}`, newUser)
    .map((response: Response) => response.json());
  }

}
