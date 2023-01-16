import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = "http://localhost:1718";
  currentUserSubject: BehaviorSubject<any>;

  constructor(private http: HttpClient) { 
    console.log("El servicio de autenticación está corriendo.");
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')||'{}'))
  }

  //JSON.parse hace que un texto se transforme en un json
  //JSON.stringify hace que un objeto o valor de js se transforme en un json

  iniciarSesion(credenciales:any):Observable<any>{
    return this.http.post(this.apiUrl, credenciales).pipe(map(data=>{
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      this.currentUserSubject.next(data);
      return data;
    }
      ))
  }

  get UsuarioAutenticado(){
    return this.currentUserSubject.value;
  }
}
