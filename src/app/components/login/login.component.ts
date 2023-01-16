import { Component, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form : FormGroup;

  constructor(private formBuilder : FormBuilder, 
    private authService: AuthService,
    private ruta : Router){
      this.form = this.formBuilder.group(
        {
          email:['', [Validators.required]],
          password:['', [Validators.required, Validators.minLength(8)]]
        }
      )
    }

    onEnviar(event:Event){
      event.preventDefault;
      this.authService.iniciarSesion(this.form.value).subscribe(data=>{
        console.log("DATA" + JSON.stringify(data));
        this.ruta.navigate(['/portfolio']);
      })
    }

    //CONEXION HTML

    get Email(){
      return this.form.get('email');
    }

    get Password(){
      return this.form.get('password');
    }

  ngOnInit(): void {
  }

}







