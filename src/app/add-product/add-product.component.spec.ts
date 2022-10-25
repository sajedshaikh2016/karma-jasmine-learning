import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductComponent } from './add-product.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AddProductComponent', () => {
  let component: AddProductComponent;
  let fixture: ComponentFixture<AddProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddProductComponent],
      imports: [FormsModule, ReactiveFormsModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('is form valid when empty', () => {
    let itemName = component.rForm.controls['name'];
    itemName.setValue('iPhone 14 Pro');
    let itemPrice = component.rForm.controls['price'];
    itemPrice.setValue('120000');
    let itemShipping = component.rForm.controls['shipping'];
    itemShipping.setValue('2000');
    expect(component.rForm.valid).toBeTruthy();
  });

  it('is form invalid when name is less than 3', () => {
    let itemName = component.rForm.controls['name'];
    itemName.setValue('iP');
    let itemPrice = component.rForm.controls['price'];
    itemPrice.setValue('4000');
    let itemShipping = component.rForm.controls['shipping'];
    itemShipping.setValue('2000');
    expect(component.rForm.valid).toBeFalsy();
    expect(component.rForm.controls['name'].valid).toBeFalsy();
  });

  it('is form invalid when price is less than 5000', () => {
    let itemName = component.rForm.controls['name'];
    itemName.setValue('iPhone 14 Pro');
    let itemPrice = component.rForm.controls['price'];
    itemPrice.setValue('2000');
    let itemShipping = component.rForm.controls['shipping'];
    itemShipping.setValue('2000');
    expect(component.rForm.valid).toBeFalsy();
    expect(component.rForm.controls['price'].valid).toBeFalsy();
  });

  it('is form invalid when shipping chanrges are more than 3000', () => {
    let itemName = component.rForm.controls['name'];
    itemName.setValue('iPhone 14 Pro');
    let itemPrice = component.rForm.controls['price'];
    itemPrice.setValue('120000');
    let itemShipping = component.rForm.controls['shipping'];
    itemShipping.setValue('5000');
    expect(component.rForm.valid).toBeFalsy();
    expect(component.rForm.controls['shipping'].valid).toBeFalsy();
  });

  it('is form invalid when price is not divisible by 10', () => {
    let itemName = component.rForm.controls['name'];
    itemName.setValue('iPhone 14 Pro');
    let itemPrice = component.rForm.controls['price'];
    itemPrice.setValue('5555');
    let itemShipping = component.rForm.controls['shipping'];
    itemShipping.setValue('2000');
    expect(component.rForm.valid).toBeTruthy();
    expect(component.rForm.controls['price'].valid).toBeTruthy();
  });

});
