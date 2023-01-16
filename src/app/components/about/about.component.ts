import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AboutService } from 'src/app/service/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  form: FormGroup;
  isSubmitted: boolean = false;
  mostrarEditar: boolean = false;
  suscripcion?: Subscription;
  formList: any;

  constructor(private servicio: AboutService, private formBuilder: FormBuilder) { }

//poner en el constructor
// this.getPersonas(),
// this.form = this.formBuilder.group(
//   {
//     id: ['', [Validators.required]],
//     nombre: ['', [Validators.required]],
//     apellido: ['', [Validators.required]],
//     sobre_mi: ['', [Validators.required]],
//     url_perfil: ['', [Validators.required]],
//     url_portada: ['', [Validators.required]],
//     url_correo: ['', [Validators.required]],
//     url_github: ['', [Validators.required]]
//   }
// ),

  ngOnInit(): void {
    
    this.suscripcion = this.servicio.edicion().subscribe(value => this.mostrarEditar = value)
  }

get formCtrl() {
  return this.form.controls;
}

  //GET
  getPersonas() {
    this.servicio.obtenerPersona().subscribe((data: any) => {
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.formList = resultData;
        }
      }
    })
  }

  //POST - PUT

  savePersona(id:any) {
    this.isSubmitted = true;
    if (this.form.invalid) {
      return;
    } else {
      if (!id) {
        this.servicio.crearPersona(this.form.value).subscribe(() => {
          alert('Se creó correctamente');
        });
      } else {
        this.servicio.editarPersona(id, this.form.value).subscribe(() => {
          alert('Se guardó correctamente');
        })
      }
    }
  }

  //DELETE

  deletePersona(id: any) {
    var result = confirm("¿Estás seguro de que quieres eliminar?");
    if (id && result) {
      const formulario = this.formList.find((x:any)=> x.id === id)
      if (!formulario) {
        return;
      } else {
        id.isDeleting = true;
        this.servicio.borrarPersona(id).subscribe(() => {
          alert('Eliminado correctamente');
        })
      }
    }
  }

  //ON/OFF
  editarOn(){
    this.servicio.edicionOn();
  }

  //CONEXION HTML
  get Id(){
    return this.form.get('id');
  }

  get Nombre(){
    return this.form.get('nombre');
  }

  get Apellido(){
    return this.form.get('apellido');
  }

  get SobreMi(){
    return this.form.get('sobre_mi');
  }

  get UrlPerfil(){
    return this.form.get('url_perfil');
  }

  get UrlPortada(){
    return this.form.get('url_portada');
  }

  get UrlCorreo(){
    return this.form.get('url_correo');
  }

  get UrlGithub(){
    return this.form.get('url_github');
  }

}
