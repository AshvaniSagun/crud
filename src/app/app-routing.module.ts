import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { homeComponent } from './home/home.component';
import {ToDoListComponent} from './component/ToDoData/toDoData.component';

@NgModule({
  declarations: [ 
    homeComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: 'home', component: homeComponent },
      { path: 'toDo-Data', component: ToDoListComponent },
      { path: '**', redirectTo: 'home' }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}


