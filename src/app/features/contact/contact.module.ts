import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ProfileComponent } from '../../components/profile/profile.component';
import { ContactComponent } from '../../components/contact/contact.component';


@NgModule({
  declarations: [
    ProfileComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
