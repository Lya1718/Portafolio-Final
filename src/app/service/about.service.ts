import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { UiService } from './ui.service';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private mostrarEditar: boolean = false;
  private sujeto = new Subject<any>();
  private url = 'http://localhost:8080/personas';
  private apiUrl = {
    obtenerPersona: this.url + "/ver",
    crearPersona: this.url + "/new",
    borrarPersona: this.url + "/delete",
    editarPersona: this.url + "/editar"
  }

  constructor(private service:UiService) { }

  // GET
  obtenerPersona():Observable<any>{
    return this.service.get(this.apiUrl.obtenerPersona);
  }

  // DELETE
  borrarPersona(id: any): Observable<any> {
    return this.service.delete(this.apiUrl.editarPersona, id);
  }

  //EDIT
  editarPersona(id: any, data: any): Observable<any> {
    return this.service.put(this.apiUrl.editarPersona, id, data);
  }

  //POST
  crearPersona(data:any):Observable<any>{
    return this.service.post(this.apiUrl.crearPersona, data)
  }

  //ON/OFF
  edicionOn(){
    console.log("funciona primera funcion");
    this.mostrarEditar = !this.mostrarEditar;
    this.sujeto.next(this.mostrarEditar);
  }

  edicion():Observable<any>{
    console.log("funciona segunda funcion");
    return this.sujeto.asObservable();
  }
}
