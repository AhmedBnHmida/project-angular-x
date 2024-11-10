import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit{

  product!:FormGroup;
  search!: FormControl; 

  ngOnInit(): void {

    this.search=new FormControl();
      this.product =new FormGroup({
        name : new FormControl("Test",Validators.required),
        image: new FormControl("",Validators.required),
        description :  new FormControl(),
        price: new FormControl(),
        brand: new FormGroup({
          name:new FormControl("",[Validators.required,Validators.minLength(8)]),
          logo:new FormControl(),
        }),
        promotion :  new FormControl(),
        quantity :  new FormControl(),
        nb_likes:  new FormControl({value:'0',disabled:true}),
        tags :new FormArray([new FormControl()])
      });
  }

  get tags() : FormControl[]{
    return (this.product.get('tags') as FormArray)!.controls as FormControl[]
  }
  addTags(){
    this.tags.push(new FormControl());
  }

  get name(){
    return this.product.get('name') as FormControl
  }
  get image(){
    return this.product.get('image') as FormControl
  }

  get brandname(){
    return this.product.get('brand')!.get('name') as FormControl;
  }
  

  submit(){
    //console.log((this.product.get('tags') as FormArray)!.controls as FormControl[])
    console.log(this.product.get('name'))
    console.log(this.product.get('brand')!.get('name'));
    console.log(this.product.getRawValue())
    console.log(this.product.value)
  }
}
