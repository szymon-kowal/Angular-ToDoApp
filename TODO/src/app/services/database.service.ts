import { Injectable, input } from '@angular/core';
import { ToDo } from '../interfaces/ToDo';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private _data: ToDo[] = [
    {
      id: 1,
      title: 'F test title',
      text: 'F test text',
      endDate: 'F test date',
    },
    {
      id: 2,
      title: 'S test title',
      text: 'S test text',
      endDate: 'S test date',
    },
    {
      id: 3,
      title: 'T test title',
      text: 'T test text',
      endDate: 'T test date',
    },
  ];
  constructor() {}

  getData(): ToDo[] {
    return this._data;
  }

  getToDoById(id: number): ToDo | undefined {
    return this._data.find((todo) => todo.id === id);
  }

  addToDo(toDo: ToDo): void {
    this._data.push(toDo);
  }

  removeData(inputId: number): void {
    this._data = this._data.filter((todo) => todo.id != inputId);
  }

  generateId(): number {
    return this._data.length > 0
      ? Math.max(...this._data.map((t) => t.id)) + 1
      : 1;
  }
}
