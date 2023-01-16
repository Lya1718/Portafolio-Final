import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ProjectsService } from 'src/app/service/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  form: FormGroup;
  isSubmitted: boolean = false;
  mostrarEditar: boolean = false;
  suscripcion?: Subscription;
  formList: any;

  constructor(private servicio: ProjectsService, private formBuilder: FormBuilder) { }

  //poner en el constructor
  // this.getProyectos(),
  // this.form = this.formBuilder.group(
  //   {
  //     id: ['', [Validators.required]],
  //     titulo: ['', [Validators.required]],
  //     descripcion: ['', [Validators.required]],
  //     image: ['', [Validators.required]],
  // }
  // ),

  ngOnInit(): void {
    this.suscripcion = this.servicio.edicion().subscribe(value => this.mostrarEditar = value)
  }

  get formCtrl() {
    return this.form.controls;
  }

  //GET
  getProyectos() {
    this.servicio.obtenerProyecto().subscribe((data: any) => {
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.formList = resultData;
        }
      }
    })
  }

  //POST - PUT

  saveProyecto(id: any) {
    this.isSubmitted = true;
    if (this.form.invalid) {
      return;
    } else {
      if (!id) {
        this.servicio.crearProyecto(this.form.value).subscribe(() => {
          alert('Se creó correctamente');
        });
      } else {
        this.servicio.editarProyecto(id, this.form.value).subscribe(() => {
          alert('Se guardó correctamente');
        })
      }
    }
  }

  //DELETE

  deleteProyecto(id: any) {
    var result = confirm("¿Estás seguro de que quieres eliminar?");
    if (id && result) {
      const formulario = this.formList.find((x: any) => x.id === id)
      if (!formulario) {
        return;
      } else {
        id.isDeleting = true;
        this.servicio.borrarProyecto(id).subscribe(() => {
          alert('Eliminado correctamente');
        })
      }
    }
  }

  //ON/OFF
  editarOn() {
    this.servicio.edicionOn();
  }

  //CONEXION HTML
  get Id(){
    return this.form.get('id');
  }

  get Titulo(){
    return this.form.get('titulo');
  }

  get Descripcion(){
    return this.form.get('descripcion');
  }

  get Image(){
    return this.form.get('image');
  }

}
