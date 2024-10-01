import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [

  { path:"home" , component:HomeComponentComponent },
  { path: "", redirectTo: '/home', pathMatch: 'full' },

  { path: "products/:id", component:ProductComponent },
  //{ path: "products",component:ProductComponent, children },
   //{ path: ":id", component:ProductComponent },

  
  { path: "**", component:NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
