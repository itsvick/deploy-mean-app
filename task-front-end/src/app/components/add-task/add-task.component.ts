import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  title = new FormControl('');
  description = new FormControl('');
  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
  }

  submit() {
    if (this.title.value !== "" && this.description.value !== "") {
      this.tasksService.addTask(this.title.value, this.description.value);
    }
    console.log({ title: this.title.value, description: this.description.value });
  }

}
