import { Component, OnInit } from '@angular/core';
import { TasksService} from 'src/app/services/tasks.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tasks: any;

  constructor(
    private tasksService: TasksService,
  ) { }

  ngOnInit(): void {
    this.allTasks()
  }

  // SHOW TASKS
  allTasks() {
      this.tasksService.getTasksAll().subscribe((task: any) => {
        this.tasks = task;
      })
  }

}
