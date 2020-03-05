import { BehaviorSubject } from 'rxjs';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';

import { Book } from './../models/book';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private url:string;
  private books:Book[];
  private booksSubject = new BehaviorSubject<Book[]>(null);
  constructor(private http:HttpClient) { 

    this.url = `${environment.localUrl}/books`;

    //this.getList();
  }


  getList(){

    console.log("dentro do get list");
    
     this.http.get(this.url).subscribe((res:Book[]) => {
       if(res){

        console.log("get list do book service ");
        
         this.books = res;
         this.booksSubject.next(this.books);
       }
     })
  }

  get(){
    return this.booksSubject.asObservable();
  }

  save(object:Book){

    if(object.id){

      this.http.patch(`${this.url}/${object.id}`,object).subscribe((res) =>{
        this.getList();
      })
    }else{

      this.http.post(this.url,object).subscribe((res:Book) => {
        if(res) {
          res.author = []; 
          this.add(res)
  
        
        }
        
      })
    }
  }

  findById(id:number){
    return this.http.get(`${this.url}/${id}`);
  }

  add(object:Book){
    this.books.push(object);
    this.booksSubject.next(this.books);
  }
}
