import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe((data) => {
      console.log(data)
    });

  }

}
