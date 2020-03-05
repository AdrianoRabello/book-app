import { Book } from './book';


export interface Author{

  id:number;
  nome:string;
  books:Book[];
}