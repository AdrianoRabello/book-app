import { Book } from './../../models/book';
import { BookService } from './../../services/book.service';
import { ActivatedRoute } from '@angular/router';
import { Author } from '../../models/author';
import { AuthorService } from './../../services/author.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  private authores: Author[];
  private author: Author;
  private form: FormGroup;
  private livros: Book[];

  formArray: FormArray;

  constructor(
    private service: AuthorService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private bookService: BookService
  ) { }

  ngOnInit() {

    this.form = new FormGroup({
      id: this.fb.control(null),
      nome: this.fb.control(null, [Validators.required]),
      books: this.fb.array([])
    })

    this.service.get().subscribe((res: Author[]) => {
      if (res) {

        this.authores = res
      }
    });

    this.bookService.get().subscribe((res) => {
      this.livros = res
    })


    this.getParam()




    /*this.service.getCourses().subscribe((res) => {

      if(res){

        console.log(res);
      }
      
    })*/

  }


  clickAddBook() {
    (<FormArray>this.form.get('books')).push(this.addBook());
  }

  addBook(): FormGroup {

    return this.fb.group({
      book: this.fb.control('')
    })
  }





  save() {
    console.log(this.form.value);

    this.author = this.form.value;
    //this.author.books = [];
    this.service.save(this.author);
    this.form.reset();

  }




  getParam() {


    this.route.firstChild.params.subscribe((res) => {
      
      if (res) {

        console.log(res);
        
        this.service.findById(res.id).subscribe((res: Author) => {
          console.log(res);

          this.author = res;
          this.form.reset();
          this.setForm();
        })
      }

    })
  }


  setForm() {


    if (this.author.books.length > 0) {
      this.author.books.forEach(element => {
        //this.clickAddBook()
      });
    }
    this.form.patchValue(this.author);
  }

}
