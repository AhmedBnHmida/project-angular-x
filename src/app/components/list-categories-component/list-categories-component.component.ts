import { Component, ViewChild, OnInit, AfterViewInit, ViewChildren, QueryList,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/categorie';
import { TestComponent } from '../test/test.component';
import { CategoryComponent } from '../category/category.component';
import { CategoryService } from 'src/app/services/category.service';
import { ConsumerService } from 'src/app/services/consumer.service';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';


@Component({
  selector: 'app-list-categories-component',
  templateUrl: './list-categories-component.component.html',
  styleUrls: ['./list-categories-component.component.css']
})
export class ListCategoriesComponentComponent implements AfterViewInit,OnInit,OnDestroy {

  @ViewChild(TestComponent) testComponent!: TestComponent;
  @ViewChild('i') input!: HTMLInputElement;
  @ViewChildren(CategoryComponent) children!: QueryList<CategoryComponent>;

  //constructor(private router: Router) {}

  categories : Category[] =[];

  subscribers!: Subscription;

  constructor(
    private router: Router,
    private _categoryService: CategoryService,
    private _consumer:ConsumerService
  ) {}

  ngOnDestroy(): void {
    this.subscribers.unsubscribe();
  }

  ngOnInit(): void {
    //this.categories = this._categoryService.getCategories();
    this.subscribers = this._consumer.get<Category[]>('category').subscribe({
      next: (data) => (this.categories = data),
      error: (e) => console.log(e),
      complete: () => console.log('Terminé'),
    });
  }

  ngAfterViewInit(): void {
    console.log(this.input);
    console.log(this.testComponent.test);
    this.testComponent.start();
    this.children.forEach((e) => console.log(e));
  }


title : string ='';
test: string = '10';


/*
categories : Category[] = [
  {"id":1,"title":"Grand électroménager",
"image":"assets/images/categorie_electromenager.jpg", "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
"available":true},

{"id":2,"title":"Petit électroménager",
"image":"assets/images/categorie_petit_electromenager.jpg", "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
"available":true},

{"id":3,"title":"Produits informatiques",
"image":"assets/images/categorie_produits_informatiques.jpg", "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
"available":true},

{"id":4,"title":"Smart Phones", "image":"assets/images/categorie_smartPhone.jpg",
"description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", "available":true},

{"id":5,"title":"TV, images et son",
"image":"assets/images/categorie_tv_image_son.jpg", "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
"available":true},

{"id":6,"title":"Produits voiture", "image":"assets/images/produits_nettoyages.jpg",
"description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.","available":false},
]
*/


afficheDescription(id: number) {
  //foreach : ES
  this.categories.forEach(element => {
    if (element.id == id){
      alert(element.description)
    }
  });
  //filter : ES
  let category = this.categories.filter((element) => element.id == id)[0];
  alert(category.description);
}

changeTest() {
  this.test = '12';
}


DeleteCategory(event: any) {

  console.log(event); 
  /*
  this._consumer.delete<Category>('category', event).subscribe({
    next : ()=>this.categories = this.categories.filter((c) => c.id != event)
  })
  */
  //this.categories= this.categories.filter((c) => c.id != event);
  this._consumer.get<Product[]>('product')
      .subscribe({
        next: (data) => {
           data.forEach((element) => {
             console.log(element);
             element.categoryId == event && this._consumer.delete<Product>('product',element.id).subscribe()
           });
  
          this._consumer.delete<Category>('category', event).subscribe({
            next:()=> this.categories = this.categories.filter((c) => c.id != event)
          })   
      }
    })   
     
}


toUpdate(c:Category){
  console.log(JSON.stringify(c));
  this.router.navigate(['/category/update',JSON.stringify(c)])
}
}