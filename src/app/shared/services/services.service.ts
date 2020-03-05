import { environment } from './../../../environments/environment';

import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {  private url:string;

  private urlFinal:string;
  private objects:any[];
  private anySubject = new BehaviorSubject<any[]>(null);
  constructor(private http:HttpClient) { 

    this.url = `${environment.localUrl}/${this.urlFinal}`;

    this.getList();
  }

  getList(){

    console.log("dentro do get list");
    
     this.http.get(this.url).subscribe((res:any[]) => {
       if(res){

         this.objects = res;
         this.anySubject.next(this.objects);
       }
     })
  }

  get(){
    return this.anySubject.asObservable();
  }

  save(object:any){

    if(object.id){

      this.http.patch(`${this.url}/${object.id}`,object).subscribe((res) =>{
        this.getList();
      })
    }else{

      this.http.post(this.url,object).subscribe((res:any) => {
        if(res) {
         
          this.add(res)
  
        
        }
        
      })
    }
  }

  findById(id:number){
    return this.http.get(`${this.url}/${id}`);
  }

  add(object:any){
    this.objects.push(object);
    this.anySubject.next(this.objects);
  }
}
