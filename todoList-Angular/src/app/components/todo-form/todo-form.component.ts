import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { TasksService} from 'src/app/services/tasks.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  task: any;
  tasks: any;
  todoTask: {};
  name: "";

  constructor(
    private tasksService: TasksService,
  ) { }

  ngOnInit(): void {
  }

  addTask(task) {
    console.log(task)
    this.todoTask = {
          name: task,
    }
    console.log(this.todoTask)
    this.tasksService.addTask(this.todoTask).subscribe((task: any) => {
    })
  }

  // addTodo(event) {
  //   this.todoObj = {
  //     newTodo: this.newTodo,
  //     completed: false
  //   }
  //   this.todos.push(this.todoObj);
  //   this.newTodo = '';
  //   event.preventDefault();
  // }

}
