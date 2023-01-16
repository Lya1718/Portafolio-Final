import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { UiService } from './ui.service';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private mostrarEditar: boolean = false;
  private sujeto = new Subject<any>();
  private url = 'http://localhost:8080/educacion';
  private apiUrl = {
    obtenerEducacion: this.url + "/ver",
    crearEducacion: this.url + "/new",
    borrarEducacion: this.url + "/delete",
    editarEducacion: this.url + "/editar"
  }

  constructor(private service: UiService) { }

  // GET
  obtenerEducacion(): Observable<any> {
    return this.service.get(this.apiUrl.obtenerEducacion);
  }

  // DELETE
  borrarEducacion(id: any): Observable<any> {
    return this.service.delete(this.apiUrl.editarEducacion, id);
  }

  //EDIT
  editarEducacion(id: any, data: any): Observable<any> {
    return this.service.put(this.apiUrl.editarEducacion, id, data);
  }

  //POST
  crearEducacion(data: any): Observable<any> {
    return this.service.post(this.apiUrl.crearEducacion, data)
  }

  //ON/OFF
  edicionOn() {
    console.log("funciona primera funcion");
    this.mostrarEditar = !this.mostrarEditar;
    this.sujeto.next(this.mostrarEditar);
  }

  edicion(): Observable<any> {
    console.log("funciona segunda funcion");
    return this.sujeto.asObservable();
  }
}
