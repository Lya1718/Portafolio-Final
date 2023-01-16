import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { UiService } from './ui.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private mostrarEditar: boolean = false;
  private sujeto = new Subject<any>();
  private url = 'http://localhost:8080/proyectos';
  private apiUrl = {
    obtenerProyecto: this.url + "/ver",
    crearProyecto: this.url + "/new",
    borrarProyecto: this.url + "/delete",
    editarProyecto: this.url + "/editar"
  }

  constructor(private service:UiService) { }

  // GET
  obtenerProyecto():Observable<any>{
    return this.service.get(this.apiUrl.obtenerProyecto);
  }

  // DELETE
  borrarProyecto(id: any): Observable<any> {
    return this.service.delete(this.apiUrl.editarProyecto, id);
  }

  //EDIT
  editarProyecto(id: any, data: any): Observable<any> {
    return this.service.put(this.apiUrl.editarProyecto, id, data);
  }

  //POST
  crearProyecto(data:any):Observable<any>{
    return this.service.post(this.apiUrl.crearProyecto, data)
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
