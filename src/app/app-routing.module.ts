import { ChipsComponent } from './chips/chips.component';
import { ModalComponent } from './modal/modal.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:"author",
    loadChildren: ()=> import('./home/home.module').then( m => m.HomeModule)
  },
  {
    path:"modal",
    component: ModalComponent
  },
  {
    path:"clips",
    component: ChipsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
