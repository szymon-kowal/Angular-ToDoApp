import { Component, Input, OnInit } from '@angular/core';
import { ToDo } from '../../interfaces/ToDo';
import { CommonModule } from '@angular/common';
import { DatabaseService } from '../../services/database.service';

import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-single-to-do',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './single-to-do.component.html',
  styleUrl: './single-to-do.component.css',
})
export class SingleToDoComponent implements OnInit {
  public todo: ToDo | undefined;
  constructor(
    private _route: ActivatedRoute,
    private _databaseService: DatabaseService
  ) {}

  ngOnInit(): void {
    const id: number | undefined = parseInt(this._route.snapshot.params['id']);
    if (id === undefined) return;
    console.log(id);
    this.todo = this._databaseService.getToDoById(id);
    console.log(this.todo);
  }
}
