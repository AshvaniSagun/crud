import { Component, OnInit } from '@angular/core';
import { toDoService } from '../../service/toDo.service';
import { toDo } from '../../model/toDo.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'toDo-Data',
  templateUrl: './toDoData.component.html',
  styleUrls: ['./toDoData.component.css']
})
export class ToDoListComponent implements OnInit {
  appointmentTime  = new Date();
  constructor(
    private toDoService: toDoService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.getallToDo();
  }

  getallToDo() {
    this.toDoService.getallToDo();
  }

  editToDo(item: toDo) {
    this.toDoService.toDoItemList = Object.assign({}, item);
    this.toastrService.warning('You are about to Edit a task !');
  }

  deleteToDo(id: number) {
    this.toDoService.deleteToDo(id).subscribe(
      (data) => {
        this.getallToDo();
        this.toastrService.error('A task deleted successfully !');
      });
  }
}
