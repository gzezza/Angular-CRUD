import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DrinkModel } from 'src/shared/models/drinks.model';

@Injectable({
  providedIn: 'root'
})
export class DrinksListService {
  private URL:string = "http://localhost:3000/drinks" 

  constructor(private http: HttpClient) { }

  public getDrinks():Observable<DrinkModel>{
    return this.http.get<DrinkModel>(this.URL);
  }

  public getDrinkById(id:number):Observable<DrinkModel>{
    return this.http.get<DrinkModel>(`${this.URL}/${id}`);
  }

  public createDrink(data:DrinkModel){
    return this.http.post<DrinkModel>(this.URL, data);
  }

  public deleteDrink(id:number){
    return this.http.delete<DrinkModel>(`${this.URL}/${id}`);
  }

  public updateDrink(id:number, value:DrinkModel){
    return this.http.put<DrinkModel>(`${this.URL}/${id}`, value)
  }



}
