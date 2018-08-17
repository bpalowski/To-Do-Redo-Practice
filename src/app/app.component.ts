import { Component } from '@angular/core';
import { Task } from './models/task.model';


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
  //firstTask : Task = new Task("Do Some Stuff");

  // tasks: Task[] = [
  //     new Task('Finish weekend Angular homework for Epicodus course', 1),
  //     new Task('Begin brainstorming possible JavaScript group projects', 2),
  //     new Task('Add README file to last few Angular repos on GitHub',3)
  //   ];
    //selectedTask: Task = this.tasks[0];
    selectedTask = null;
    tasks: Task[] = [
        new Task('Test 1', 1),
        new Task('Test 2', 2),
        new Task('Test 3',3)
      ];




    editTask(clickedTask) {
    // alert("Boom!");
    this.selectedTask = clickedTask;
  }
  finishedEditing() {
    this.selectedTask = null;
  }
  addTask(newTask: Task) {
    this.masterTaskList.push(newTask);
}




  //this is where app.compnemt.ts welcome to {{title}}
