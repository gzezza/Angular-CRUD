import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DrinkModel } from 'src/shared/models/drinks.model';
import { DrinksListService } from './drinks-list.service';

@Component({
  selector: 'app-drinks-list',
  templateUrl: './drinks-list.component.html',
  styleUrls: ['./drinks-list.component.css']
})
export class DrinksListComponent implements OnInit {
   
  drinks!: DrinkModel[];
  params!: HttpParams

  constructor(private service:DrinksListService, private router:Router) {}

  ngOnInit():void {
   this.getDrinks();
  }

  getDrinks() {
    this.service.getDrinks().subscribe((res:any) => {
      this.drinks = res
    });
  }

  deleteDrink(id:number){
    this.service.deleteDrink(id).subscribe(
      {
        complete:() => this.getDrinks()
      }
    )
  }

  onFormDrink(id:number){
    this.router.navigate(['form-drink', id]);
  }




  
}
