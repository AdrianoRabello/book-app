import { Author } from '../models/author';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private url:string;
  private authores:Author[];
  private authorSubject = new BehaviorSubject<Author[]>(null);
  
  constructor(private http:HttpClient) { 

    this.url = `${environment.localUrl}/author`;


    //this.getCourses()
    this.getList();
  }

  getList(){

    console.log("dentro do get list");
    
     this.http.get(this.url).subscribe((res:Author[]) => {
       if(res){

         this.authores = res;
         this.authorSubject.next(this.authores);
       }
     })
  }

  get(){
    return this.authorSubject.asObservable();
  }

  save(object:Author){

    if(object.id){

      this.http.patch(`${this.url}/${object.id}`,object).subscribe((res) =>{
        this.getList();
      })
    }else{

      this.http.post(this.url,object).subscribe((res:Author) => {
        if(res) {
          res.books = []; 
          this.add(res)
  
        
        }
        
      })
    }
  }

  findById(id:number){
    return this.http.get(`${this.url}/${id}`);
  }

  add(object:Author){
    this.authores.push(object);
    this.authorSubject.next(this.authores);
  }

  getCourses(){

    
   
    this.http.put("username","user");
    this.http.put("password","devdojo");
    //this.http.put("hasRule:","$10$amBTa/EUCQNEhOI33dHC.etGr296z3H1GV7NfNRPpg4NNFdDpXcaS");
    this.url = `${environment.localUrl}/courses`;

    return this.http.get(this.url);
  }
}
