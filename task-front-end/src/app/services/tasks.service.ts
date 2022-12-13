import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private httpClient: HttpClient) { }


  addTask(title: string, description: string) {
    this.httpClient.post('http://localhost:3000/create', {
      title,
      description
    }).subscribe((res) => {
      console.log("res", res);
    });
  }

  getTaskList() {
    return this.httpClient.get('http://localhost:3000/getList');
  }
}
