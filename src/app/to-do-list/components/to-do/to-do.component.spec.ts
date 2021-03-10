import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, discardPeriodicTasks, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { of } from 'rxjs';
import { ToDoList } from '../../model/to-do-lost';
import { DataService } from '../../services/data/data.service';
import { ToDoListRoutingModule } from '../../to-do-list-routing.module';

import { ToDoComponent } from './to-do.component';

const MOCKDATA: ToDoList[] = [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": false
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  }
]


describe('ToDoComponent', () => {
  let component: ToDoComponent;
  let fixture: ComponentFixture<ToDoComponent>;
  let dataService: DataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToDoComponent],
      imports: [
        HttpClientModule,
        CommonModule,
        ToDoListRoutingModule,
        MatListModule,
        MatPaginatorModule,
        FormsModule,
      ],
      providers: [DataService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoComponent);
    dataService = TestBed.inject(DataService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call addData()', fakeAsync(() => {
    spyOn(component, 'addData');
    spyOn(dataService, 'getData').and.returnValues(of(MOCKDATA));
    component.ngOnInit();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.addData).toHaveBeenCalled();
    });
    discardPeriodicTasks();
  }));

  it('should populate to do list', () => {
    component.addData(MOCKDATA);
    fixture.detectChanges();
    expect(component.toDoList.length).toBe(MOCKDATA.length);
  });

  it('should delete the item from the list', fakeAsync(() => {
    component.addData(MOCKDATA);
    fixture.detectChanges();
    component.deleteItem(MOCKDATA[0]);
    fixture.detectChanges();
    tick(300);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      let finding = component.toDoList.find(list => list.id === MOCKDATA[0].id);
      expect(finding).toBe(undefined);
    });

  }));

});
