import { BookService } from './services/book.service';
import { AuthorService } from './services/author.service';
import { BookComponent } from './components/book/book.component';
import { AuthorComponent } from './components/author/author.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [AuthorComponent,BookComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,  
    HomeRoutingModule,
    
    
  ],
  exports:[AuthorComponent,BookComponent],
  providers:[AuthorService,BookService]
})
export class HomeModule { }
