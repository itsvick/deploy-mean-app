import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  $taskList?: Observable<any>;
  constructor(private taskService: TasksService) { }

  ngOnInit(): void {
    this.$taskList = this.taskService.getTaskList();
  }

}
