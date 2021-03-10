import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoComponent } from './components/to-do/to-do.component';
import { ToDoListRoutingModule } from './to-do-list-routing.module';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data/data.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ToDoComponent],
  imports: [
    CommonModule,
    ToDoListRoutingModule,
    MatListModule,
    HttpClientModule,
    MatPaginatorModule,
    FormsModule,
  ],
  providers: [DataService]
})
export class ToDoListModule { }
