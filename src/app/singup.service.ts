import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SingupService {

  constructor(private http: HttpClient, private message: HttpHeaders) { }

  singup (username: string, email: string, password: string): void {
    
  }
}
