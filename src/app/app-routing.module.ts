import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [

  { path:"home" , component:HomeComponentComponent },
  { path: "", redirectTo: '/home', pathMatch: 'full' },
  //{ path: "products/:id", component:ProductComponent },

  { path: "products",
     loadChildren:() => import ('./features/product/product.module')
     .then((m)=> m.ProductModule)
  },
  { path: "apropos",
    loadChildren:() => import ('./features/apropos/apropos.module')
    .then((m)=> m.AproposModule)
 },

 { path: "contact",
  loadChildren:() => import ('./features/contact/contact.module')
  .then((m)=> m.ContactModule)
},

{ path: "profile",
  loadChildren:() => import ('./features/profile/profile.module')
  .then((m)=> m.ProfileModule)
},


 
    //{ path: "products",component:ProductComponent, children },
    
  //{ path: 'path/:id', component: oneComponent},​
  //{path: 'path', component: unComponent, data:{title : 'titrespecial' } }
  
  { path: "**", component:NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
