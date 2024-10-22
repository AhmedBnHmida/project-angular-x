import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/Users';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit{
  User!:User;

  ngOnInit(): void {
    this.User= new User;
  }

  add(f:any){
    this.User.category="Customer";
  }
}