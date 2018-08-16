import { Component } from '@angular/core';

@Component({
  selector: 'Brian-First-Angular',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // We also have styleUrls; this is where we can link in specific stylesheets for this HTML. Note that it's an array. This means we can potentially link multiple stylesheets.
})
export class AppComponent {
  title = 'Amigos';
  currentFocus: string = 'Here is my list of things to do';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  firstTask = {
    description :"Clean",
    description2 :"Cook"
  }
  //this is where app.compnemt.ts welcome to {{title}}
}
