import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UiService {

  constructor(private http: HttpClient) { }

  //GET
  get(url: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
      }),
      observe: "response" as 'body'
    };
    return this.http.get(url, httpOptions)
      .pipe(map((response: any) => this.ReturnResponseData(response)),
        catchError(this.handleError));
  }

  //POST
  post(url: string, data: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      observe: "response" as 'body'
    };
    return this.http.post(url, data, httpOptions)
      .pipe(map((response: any) => this.ReturnResponseData(response)),
        catchError(this.handleError));
  }

  //EDIT
  put(url: string, id: any, data: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      observe: "response" as 'body'
    };
    return this.http.put(`${url}/${id}`, data, httpOptions)
    .pipe(map((response: any) => this.ReturnResponseData(response)),
        catchError(this.handleError));
  }

  //DELETE
  delete(url: string, id: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.delete(`${url}/${id}`)
    .pipe(map((response: any) => this.ReturnResponseData(response)),
        catchError(this.handleError));
  }

  //ERROR
  private ReturnResponseData(response: any) {
    return response;
  }
  private handleError(error: any) {
    return throwError(() => error);
  }

}

  //PROTOCOLO HTTP ENDS

//   toogleAddUser(): void{
//       this.showAddUser = !this.showAddUser
//       this.subject.next(this.showAddUser)
//   }  
//   //lo que esto hace es cambiar el valor del booleano del original
//   //al contrario

//npm install json-server
//npm run server