import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursomcService {

  private url;
  constructor(private http:HttpClient) { 

    this.url = environment.localUrl;
  }


  get(){
    return this.http.get(`${this.url}/author`);
  }
}
