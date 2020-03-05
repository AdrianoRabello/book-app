import { BookComponent } from './components/book/book.component';
import { AuthorComponent } from './components/author/author.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



const appRoutes: Routes = [
  //{path:'',component:AuthorComponent},
  {
     path: '', 
      component: AuthorComponent,
     children:[
       {
         path:":id",
         component:AuthorComponent
       }
     ]
      
  },
  /*{
    path: 'author/:id',
    component: AuthorComponent 
  },*/
  {
     path: 'book',      
     component: BookComponent 
  },
  
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(appRoutes)],
  exports:[RouterModule]
})
export class HomeRoutingModule { }
