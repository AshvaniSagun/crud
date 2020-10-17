import { TestBed, inject } from '@angular/core/testing';

import { toDoService } from './toDo.service';

describe('ToDoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [toDoService]
    });
  });

  it('should be created', inject([toDoService], (service: toDoService) => {
    expect(service).toBeTruthy();
  }));
});
