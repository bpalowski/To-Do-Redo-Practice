import { Component, Input,Output,EventEmitter } from '@angular/core';
import { Task } from '../models/task.model';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() childTaskList: Task[];
  @Output() clickSender = new EventEmitter();

  editTask(taskToEdit: Task) {
    this.clickSender.emit(taskToEdit);
  }
  // masterTaskList: Task[] = [
  //     new Task('Test 1', 1),
  //     new Task('Test2', 2),
  //     new Task('Test 3',3)
  //   ];
    priorityColor(currentTask){
      if(currentTask.priority === 1){
        return "bg-danger";
      }else if(currentTask.priority === 2){
        return "bg-warning";
      }else if(currentTask.priority === 3){
        return "bg-info";
      }
    }
  }


  // constructor() { }
