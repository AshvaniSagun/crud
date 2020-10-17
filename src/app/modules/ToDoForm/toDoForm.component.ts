import { Component, OnInit } from '@angular/core';
import { toDoService } from '../../service/toDo.service';
import { toDo } from '../../model/toDo.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'toDo-Form',
  templateUrl: './toDoForm.component.html',
  styleUrls: ['./toDoForm.component.css']
})
export class ToDoComponent implements OnInit {
  appointmentTime  = new Date();
  constructor(
    private toDoService: toDoService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
  }

  createAndUpdateToDo(toDoItemList: toDo) {
    if (toDoItemList.id === null) {
      this.createToDo(toDoItemList);
    } else {
      this.updateToDo(toDoItemList);
    }
  }

  createToDo(todomodel: toDo) {
    this.toDoService.createToDo(todomodel).subscribe(
      (result: toDo) => {
        this.toDoService.getallToDo();
        this.toastrService.success('Created a new Task !');
        this.appointmentTime.getDate();
        this.clearToDo();
      });
  }

  updateToDo(todomodel: toDo) {
    this.toDoService.updateToDo(todomodel).subscribe(
      (result: toDo) => {
        this.toDoService.getallToDo();
        this.toastrService.info('A task updated successfully !');
        this.clearToDo();
      });
  }

  clearToDo() {
    this.toDoService.toDoItemList = {
      id: null,
      createdAt: '',
      modifiedAt: '',
      text: '',
      title: ''
    };
  }
}
