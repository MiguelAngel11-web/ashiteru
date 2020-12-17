import { Component, OnInit } from '@angular/core';
/* Validación de formularios */
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
/* Para las rutas */
import { Router } from '@angular/router';
/* Servidor */
import { SharedService } from '../../shared.service'

@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css']
})
export class LoginadminComponent implements OnInit {

  /*Instanciamos la varibale para el formulario */
  form: FormGroup;

  /*Creamos nuestro constructor, primero la variable del formulario que vamos a validar, segunda la varibale de nuestro servidor, tercera para el routing*/
  constructor(private formBuilder: FormBuilder, private api:SharedService, public router: Router) {
    /* Creamos nuestro grupo, donde irán los campos del formulario a validar */
    this.form = this.formBuilder.group({
      /*Correo, validamos que sea requerido y la validación de un correo */
      username:['',[Validators.required]],
      /*La contraseña requerida y que sea de 5 o más caracteres */
      pass:['',[Validators.required,Validators.minLength(5)]],

    });
  }
  /* Tomamos el valor de la contraseña dijitada por el usuario */
  get Password(){return this.form.get('pass')}
  /* Tomamos el valor del email dijitada por el usuario */
  get Username(){return this.form.get('username')}
  /* Verificamos si la contraseña es invalida y retornamos un booleano */
  get PasswordInvalid(){return this.Password.touched && this.Password.invalid}
  /* Verificamos si la contraseña es valida y retornamos un booleano */
  get PasswordValid(){return this.Password.touched && this.Password.valid}
  /* Verificamos si el Username es invalido y retornamos un booleano */
  get UsernameInvalid(){return this.Username.touched && this.Username.invalid}
  /* Verificamos si el Username es valido y retornamos un booleano */
  get UsernameValid(){return this.Username.touched && this.Username.valid}

  /* Cuando se manden los datos. Asincronamente para que primero se haga la petición al servidor y luego se navegue a home o no */
  async OnSubmit(){
    if(this.form.valid){

      await this.api.entrarAdmin(this.form.value.username,this.form.value.pass);
      this.router.navigate(['/adminAnime']);
    }
    else{
      this.form.markAllAsTouched();
    }
  }

  ngOnInit(): void {
  }

}
