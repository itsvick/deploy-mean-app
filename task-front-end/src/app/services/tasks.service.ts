import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  host = window.location.origin;
  constructor(private httpClient: HttpClient) { }


  addTask(title: string, description: string) {
    this.httpClient.post(`${this.host}/api/create`, {
      title,
      description
    }).subscribe((res) => {
      console.log("res", res);
    });
  }

  getTaskList() {
    return this.httpClient.get(`${this.host}/api/getList`);
  }
}
