import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  id: number;

  listProducts : Product[]=[
    {"id":1, "name":"Refrigérateur LG Inox","image":"assets/images/refrigerateur-lg.jpeg","categoryId":1, "description":"","price":2800,"brand":"LG","promotion":0},
    {"id":2, "name":"Refrigérateur Samsung Blanc","image":"assets/images/refrigerateur_samsung.jpeg","categoryId":1, "description":"", "price":2400,"brand":"Samsung","promotion":0},
    {"id":3, "name":"Lave vaisselle Beko", "image":"assets/images/lave_vaisselle.jpeg", "categoryId":1, "description":"","price":1875,"brand":"BEKO", "promotion":0},
    {"id":4, "name":"Oppo Smart Phone","image":"assets/images/oppo_smart.jpeg","categoryId":4, "description":"", "price":1200,"brand":"OPPO","promotion":0},
    {"id":5, "name":"Hachoir", "image":"assets/images/hachoir.jpeg","categoryId":2, "description":"","price":120,"brand":"Moulinex", "promotion":0},
    {"id":6, "name":"TV 50'' LG","image":"assets/images/tv_lg.jpeg","categoryId":5, "description":"", "price":1800,"brand":"LG","promotion":0},
  ]

  list : Product[]=[];
  ngOnInit(){
    this.activated.paramMap.subscribe(res=>{this.id=Number(res.get('id'));
    for(let p of this.listProducts){
     if (p.categoryId == this.id){
      this.list.push(p);
     }
     }})
  }


  constructor(private activated:ActivatedRoute) {
    //this.id =  this.activated.snapshot.params['id'];
    console.log('snapshot, method : ');
    console.log(this.activated.snapshot.params['id']);

    console.log('params : ');
    this.activated.params.subscribe({
      next : (p)=>console.log(p['id'])
    });


    console.log('paramMap : ');
    this.activated.paramMap.subscribe({
      next : (p)=>console.log(p.get('id'))
    });
  


  //this.listProduct = this.listproduct.filter((pr)=>pr.categoryId == this.id)
  }

}
