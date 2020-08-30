import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  API_URL = 'http://localhost:8000/api/tasks/'

  constructor(
    private http: HttpClient
  ) { }

  getTasksAll(){
    return this.http.get(`${this.API_URL}`);
  }

  getTasksById(id: number){
    return this.http.get(`${this.API_URL}${id}`);
  }

  addTask(task): Observable<object>{
    console.log(task)
    return this.http.post(`${this.API_URL}`, task);
  }

  updateTask(task, id: number){
    return this.http.put(`${this.API_URL}${id}`, task);
  }

  deleteTask(id: number){
    return this.http.delete(`${this.API_URL}${id}`);
  }

}
