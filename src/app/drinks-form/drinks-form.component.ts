import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DrinksListService } from '../drinks-list/drinks-list.service';

@Component({
  selector: 'app-drinks-form',
  templateUrl: './drinks-form.component.html',
  styleUrls: ['./drinks-form.component.css']
})
export class DrinksFormComponent implements OnInit {

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private service: DrinksListService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.getDrinkById(id);
    }

    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      price: [null, Validators.required]
    })
  }

  onSave() {
    const value = this.form.value;
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.service.updateDrink(id, value).subscribe(
        {
          next: (v) => console.log(v),
          error: (e) => console.error(e),
          complete: () => this.onCancel()
        }
      )
    } else {
      this.service.createDrink(value).subscribe(
        {
          next: (v) => console.log(v),
          error: (e) => console.error(e),
          complete: () => this.onCancel()
        }
      )
    }

  }

  getDrinkById(id: number) {
    this.service.getDrinkById(id).subscribe((value) => {
      this.form.patchValue(value)
    }
    )
  }

  onCancel() {
    this.router.navigate(['']);
    this.form.reset();
  }

}
