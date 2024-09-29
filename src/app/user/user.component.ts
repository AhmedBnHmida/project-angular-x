import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
titre : string = 'hello';
color ='blue';
person = {
  id : 1,
  name : 'test'
}

quantity = 8;

Acheter (){
  this.quantity -- ;
}
/*onInputChange(event : Event){
  const el = event.target as HTMLInputElement
  this.color = el.value;
}*/
}
