import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrinksFormComponent } from './drinks-form/drinks-form.component';
import { DrinksListComponent } from './drinks-list/drinks-list.component';

const routes: Routes = [
  {path:'', component: DrinksListComponent },
  {path:'form-drink', component: DrinksFormComponent},
  {path:'form-drink/:id', component: DrinksFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
