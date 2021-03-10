import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToDoList } from '../../model/to-do-lost';

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
  }
]

describe('DataService', () => {
  let service: DataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [
        HttpClientTestingModule,
      ],
      providers: [DataService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the right data from http', () => {
    service.getData().subscribe((res) => {
      expect(res).toEqual(MOCKDATA);
    });
  })
});
