import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { ToDoListModule } from '../../to-do-list.module';
import { catchError } from 'rxjs/operators';

@Injectable()
export class DataService {
  _URL = "https://jsonplaceholder.typicode.com/todos";

  constructor(private httpClient: HttpClient) { }

  getData(): Observable<any> {
    return this.httpClient.get<any>(this._URL).pipe(catchError(this._handleError));
  }

  private _handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

}
