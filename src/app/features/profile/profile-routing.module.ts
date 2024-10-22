import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormUserComponent } from 'src/app/components/form-user/form-user.component';
import { MainUserComponent } from 'src/app/components/main-user/main-user.component';

const routes: Routes = [
  { path:"" , component:MainUserComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
