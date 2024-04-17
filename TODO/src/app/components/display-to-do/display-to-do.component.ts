import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { ToDo } from '../../interfaces/ToDo';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-display-to-do',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './display-to-do.component.html',
  styleUrl: './display-to-do.component.css',
})
export class DisplayToDoComponent implements OnInit {
  public toDoData: ToDo[] = [];

  constructor(private databaseService: DatabaseService) {}

  ngOnInit(): void {
    this.refreshData();
  }

  refreshData(): void {
    this.toDoData = this.databaseService.getData();
  }

  addToDo(title: string, text: string, endDate: string): void {
    const newTodo: ToDo = {
      id: this.databaseService.generateId(),
      title: title,
      text: text,
      endDate: endDate,
    };
    this.databaseService.addToDo(newTodo);
    this.refreshData();
  }
  removeToDo(id: number): void {
    this.databaseService.removeData(id);
    this.refreshData();
  }
}
