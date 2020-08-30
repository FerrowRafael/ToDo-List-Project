import { Component, OnInit } from '@angular/core';
import { TasksService} from 'src/app/services/tasks.service';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent implements OnInit {

  tasks: any;

  constructor(
    private tasksService: TasksService,
  ) { }

  ngOnInit(): void {
    this.allTasks()
  }

  // UPDATE TASK
  updateTask(i) {
    let id = this.tasks[i]._id
    this.tasksService.updateTask(this.tasks, id)
    .subscribe((product: any) => {
  });
  
  
  }

  // DELETE TASK
  deleteTask(i) {
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
}
