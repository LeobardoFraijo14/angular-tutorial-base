import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bases';
  number: number = 10;
  base: number = 5;

  accumulate(value: number){
    this.number += value;
  }
  
}
