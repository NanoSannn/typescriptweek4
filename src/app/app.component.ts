import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BS2';
  n1 : number = 5;
  n2 : number = 2;
  picName :string="https://i.pinimg.com/564x/b9/0c/a9/b90ca9a9a18962e5a0741c77a3bb3f45.jpg";
  
  hi(){
    alert("Fuck youd")
  }
}