import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  form: FormGroup;
  isSubmitted: boolean = false;
  mostrarEditar: boolean = false;
  suscripcion?: Subscription;
  formList: any;

  constructor(private servicio: SkillsService, private formBuilder: FormBuilder) { }

  //poner en el constructor
  // this.getPersonas(),
  // this.form = this.formBuilder.group(
  //   {
  //     id: ['', [Validators.required]],
  //     nombre: ['', [Validators.required]],
  //     nivel: ['', [Validators.required]],
  //   }
  // ),

  ngOnInit(): void {
    this.suscripcion = this.servicio.edicion().subscribe(value => this.mostrarEditar = value)
  }

  //GET
  getHabilidades() {
    this.servicio.obtenerHabilidad().subscribe((data: any) => {
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.formList = resultData;
        }
      }
    })
  }

  //POST - PUT

  saveHabilidad(id: any) {
    this.isSubmitted = true;
    if (this.form.invalid) {
      return;
    } else {
      if (!id) {
        this.servicio.crearHabilidad(this.form.value).subscribe(() => {
          alert('Se creó correctamente');
        });
      } else {
        this.servicio.editarHabilidad(id, this.form.value).subscribe(() => {
          alert('Se guardó correctamente');
        })
      }
    }
  }

  //DELETE

  deletePersona(id: any) {
    var result = confirm("¿Estás seguro de que quieres eliminar?");
    if (id && result) {
      const formulario = this.formList.find((x: any) => x.id === id)
      if (!formulario) {
        return;
      } else {
        id.isDeleting = true;
        this.servicio.borrarHabilidad(id).subscribe(() => {
          alert('Eliminado correctamente');
        })
      }
    }
  }

  //ON/OFF
  editarOn() {
    this.servicio.edicionOn();
  }

  // PERCENT STYLE
  numberToPercent(number: any) {
    let percent = number;
    return percent + '%';
  }

  //CONEXION HTML
  get Id() {
    return this.form.get('id');
  }

  get Nombre() {
    return this.form.get('nombre');
  }

  get Nivel() {
    return this.form.get('nivel');
  }
}
