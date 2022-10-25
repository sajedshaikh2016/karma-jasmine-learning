import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validator, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  public rForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.rForm = this._formBuilder.group({
      'name': ['', [Validators.required, Validators.minLength(3)]],
      'price': ['', [Validators.required, Validators.min(5000)]],
      'shipping': ['', [Validators.required, Validators.max(3000)]],
    });
  }

  ngOnInit(): void {
  }

}
