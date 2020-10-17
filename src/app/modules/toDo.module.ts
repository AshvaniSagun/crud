import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoComponent } from './ToDoForm/toDoForm.component';
import { ToDoListComponent } from './ToDoData/toDoData.component';
import { toDoService } from '../service/toDo.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ToDoComponent,
    ToDoListComponent
  ],
  exports: [
    ToDoComponent,
    ToDoListComponent
  ],
  providers: [
    toDoService
  ]
})
export class ToDoModule { }
