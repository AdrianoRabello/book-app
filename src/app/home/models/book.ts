import { Author } from './author';

export interface Book{

  id:number;
  nome:string;
  title:string;
  author:Author[];
}