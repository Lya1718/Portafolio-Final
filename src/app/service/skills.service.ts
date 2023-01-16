import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { UiService } from './ui.service';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private mostrarEditar: boolean = false;
  private sujeto = new Subject<any>();
  private url = 'http://localhost:8080/habilidades';
  private apiUrl = {
    obtenerHabilidad: this.url + "/ver",
    crearHabilidad: this.url + "/new",
    borrarHabilidad: this.url + "/delete",
    editarHabilidad: this.url + "/editar"
  }

  constructor(private service:UiService) { 
    
  }
// GET
obtenerHabilidad():Observable<any>{
  return this.service.get(this.apiUrl.obtenerHabilidad);
}

// DELETE
borrarHabilidad(id: any): Observable<any> {
  return this.service.delete(this.apiUrl.editarHabilidad, id);
}

//EDIT
editarHabilidad(id: any, data: any): Observable<any> {
  return this.service.put(this.apiUrl.editarHabilidad, id, data);
}

//POST
crearHabilidad(data:any):Observable<any>{
  return this.service.post(this.apiUrl.crearHabilidad, data)
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
