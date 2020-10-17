import { Injectable } from '@angular/core';
import { toDo } from 'src/app/model/toDo.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from "ngx-spinner";

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class toDoService {
  allToDo: toDo[];
  mockUrl: string = 'http://localhost:3000/toDo';

  toDoItemList: toDo = {
    id: null,
    createdAt: '',
    modifiedAt: '',
    text: '',
    title: ''
  }

  constructor(
    private http: HttpClient,
    private ngxSpinnerService: NgxSpinnerService
  ) { }

  getallToDo() {
    this.ngxSpinnerService.show();
    return this.http.get<toDo[]>(this.mockUrl, headerOption).subscribe(
      (data: toDo[]) => {
        this.allToDo = data;
        console.table(this.allToDo);
        setTimeout(() => {
          this.ngxSpinnerService.hide();
        }, 500);
      });
  }

  deleteToDo(id: Number): Observable<toDo> {
    return this.http.delete<toDo>(this.mockUrl + '/' + id, headerOption);
  }

  createToDo(item: toDo): Observable<toDo> {
    return this.http.post<toDo>(this.mockUrl, item, headerOption);
  }

  updateToDo(item: toDo): Observable<toDo> {
    return this.http.put<toDo>(this.mockUrl + '/' + item.id, item, headerOption);
  }
}
