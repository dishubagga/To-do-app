import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ToDoList } from '../../model/to-do-lost';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit, OnDestroy {
  toDoList: ToDoList[] = [];
  constructor(private dataService: DataService) { }
  timer: any;

  ngOnInit(): void {
    this.timer = timer(0, 10000);
    this.timer.subscribe(() => {
      this.dataService.getData().subscribe((data: ToDoList[]) => {
        this.addData(data);
      });
    });
  }

  addData(data: ToDoList[]): void {
    this.toDoList = data.filter(item => item.completed === false);
    console.log('Updated data');
  }


  deleteItem(item: any) {
    console.log(item);
    setTimeout(() => {
      this.toDoList.splice(this.toDoList.indexOf(item), 1);
    }, 200);
  }

  ngOnDestroy(): void {
    this.timer.unsubscribe;
  }

}
