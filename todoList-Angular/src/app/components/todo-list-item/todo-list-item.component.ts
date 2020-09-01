import { Component, OnInit } from '@angular/core';
import { TasksService} from 'src/app/services/tasks.service';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent implements OnInit {

  tasks: any;
  hideUpdate:boolean = true;
  myValue;
  model:any = {};

  constructor(
    private tasksService: TasksService,
  ) { }

  ngOnInit(): void {
    this.allTasks()
  }

  editTask(i):void {
    this.hideUpdate = false;
    this.myValue = i;
    this.model.name = this.tasks[i].name;
    this.model.id = this.tasks[i].id;
  }

  // UPDATE TASK
  updateTask() {
    let i = this.myValue;
    this.tasks[i] = this.model;
    let id = this.model.id
    console.log(this.model, id)
    this.tasksService.updateTask(this.model, id)
    .subscribe((task: any) => {
    });
  }

  // DELETE TASK
  removeTask(i) {
    console.log(i, this.tasks[i].id)
    let id = this.tasks[i].id;
    this.tasksService.deleteTask(id)
    .subscribe((product: any) => {
    })
  }

  // SHOW TASKS
  allTasks() {
    this.tasksService.getTasksAll().subscribe((task: any) => {
      this.tasks = task;
    })
  }

  // SHOW TOGGLE
  // showUpdate(){
  //   this.show = !this.show;
  // }
}
