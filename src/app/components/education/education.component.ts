import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { EducationService } from 'src/app/service/education.service';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  form: FormGroup;
  isSubmitted: boolean = false;
  mostrarEditar: boolean = false;
  suscripcion?: Subscription;
  formList: any;

  constructor(private servicio: EducationService, private formBuilder: FormBuilder) { }

  //poner en el constructor
  // this.getEducacion(),
  // this.form = this.formBuilder.group(
  //   {
  //     id: ['', [Validators.required]],
  //     institucion: ['', [Validators.required]],
  //     titulo: ['', [Validators.required]],
  //     descripcion: ['', [Validators.required]]
  // }
  // ),

  ngOnInit(): void {
    this.suscripcion = this.servicio.edicion().subscribe(value => this.mostrarEditar = value)
  }

  get formCtrl() {
    return this.form.controls;
  }

  //GET
  getEduacion() {
    this.servicio.obtenerEducacion().subscribe((data: any) => {
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.formList = resultData;
        }
      }
    })
  }

  //POST - PUT

  saveEducacion(id: any) {
    this.isSubmitted = true;
    if (this.form.invalid) {
      return;
    } else {
      if (!id) {
        this.servicio.crearEducacion(this.form.value).subscribe(() => {
          alert('Se creó correctamente');
        });
      } else {
        this.servicio.editarEducacion(id, this.form.value).subscribe(() => {
          alert('Se guardó correctamente');
        })
      }
    }
  }

  //DELETE

  deleteEducacion(id: any) {
    var result = confirm("¿Estás seguro de que quieres eliminar?");
    if (id && result) {
      const formulario = this.formList.find((x: any) => x.id === id)
      if (!formulario) {
        return;
      } else {
        id.isDeleting = true;
        this.servicio.borrarEducacion(id).subscribe(() => {
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
  get Id() {
    return this.form.get('id');
  }

  get Institucion() {
    return this.form.get('institucion');
  }

  get Titulo() {
    return this.form.get('titulo');
  }

  get Descripcion() {
    return this.form.get('descripcion');
  }
}
