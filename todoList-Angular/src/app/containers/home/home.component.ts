import { Component, OnInit } from '@angular/core';
import { TasksService} from 'src/app/services/tasks.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(
    private tasksService: TasksService,
  ) { }

  ngOnInit(): void {
  }


}
