import { Component, OnInit } from '@angular/core';
/* Validación de formularios */
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
/* Para las rutas */
import { Router } from '@angular/router';
/* Servidor */
import { SharedService } from '../../shared.service'

@Component({
  selector: 'app-newanime',
  templateUrl: './newanime.component.html',
  styleUrls: ['./newanime.component.css']
})
export class NewanimeComponent implements OnInit {

  /*Instanciamos la varibale para el formulario */
  form: FormGroup;
  data:any;

  /*Creamos nuestro constructor, primero la variable del formulario que vamos a validar, segunda la varibale de nuestro servidor, tercera para el routing*/
  constructor(private formBuilder: FormBuilder, private api:SharedService, public router: Router) {
     /* Variable para identificar que sea una URL */
     const url = /^[A-Za-z][A-Za-z\d.+-]*:\/*(?:\w+(?::\w+)?@)?[^\s/]+(?::\d+)?(?:\/[\w#!:.?+=&%@\-/]*)?$/;
    /* Creamos nuestro grupo, donde irán los campos del formulario a validar */
    this.form = this.formBuilder.group({
      /*Nombre, validamos que sea requerido */
      nameForAnime:['',[Validators.required]],
      /*La description requerida */
      description:['',[Validators.required]],
        /*La url requerida y en formato link */
      urlImage:['',[Validators.required,Validators.pattern(url)]],
        /*La url requerida y en formato link */
      urlVideo:['',[Validators.required,Validators.pattern(url)]],
        /*Los episodios requerdios */
      episodes:['',[Validators.required]]

    });
  }
  /* Tomamos el valor de la nameAnime dijitada por el usuario */
  get NameAnime(){return this.form.get('nameForAnime')}
  /* Tomamos el valor del description dijitada por el usuario */
  get Description(){return this.form.get('description')}
  /* Tomamos el valor del description dijitada por el usuario */
  get UrlImage(){return this.form.get('urlImage')}
  /* Tomamos el valor del description dijitada por el usuario */
  get UrlVideo(){return this.form.get('urlVideo')}
  /* Tomamos el valor del description dijitada por el usuario */
  get Episodes(){return this.form.get('episodes')}
  /* Verificamos si la contraseña es invalida y retornamos un booleano */
  get NameAnimeInvalid(){return this.NameAnime.touched && this.NameAnime.invalid}
  /* Verificamos si la contraseña es valida y retornamos un booleano */
  get NameAnimeValid(){return this.NameAnime.touched && this.NameAnime.valid}
  /* Verificamos si el Description es invalido y retornamos un booleano */
  get DescriptionInvalid(){return this.Description.touched && this.Description.invalid}
  /* Verificamos si el Description es valido y retornamos un booleano */
  get DescriptionValid(){return this.Description.touched && this.Description.valid}
  /* Verificamos si el Description es invalido y retornamos un booleano */
  get UrlImageInvalid(){return this.UrlImage.touched && this.UrlImage.invalid}
  /* Verificamos si el UrlImage es valido y retornamos un booleano */
  get UrlImageValid(){return this.UrlImage.touched && this.UrlImage.valid}
  /* Verificamos si el Description es invalido y retornamos un booleano */
  get UrlVideoInvalid(){return this.UrlVideo.touched && this.UrlVideo.invalid}
  /* Verificamos si el UrlVideo es valido y retornamos un booleano */
  get UrlVideoValid(){return this.UrlVideo.touched && this.UrlVideo.valid}
  /* Verificamos si el Description es invalido y retornamos un booleano */
  get EpisodesInvalid(){return this.Episodes.touched && this.Episodes.invalid}
  /* Verificamos si el Episodes es valido y retornamos un booleano */
  get EpisodesValid(){return this.Episodes.touched && this.Episodes.valid}

  /* Cuando se manden los datos. Asincronamente para que primero se haga la petición al servidor y luego se navegue a home o no */
  async OnSubmit(){
    if(this.form.valid){
      this.data = {
        NameAnime:this.form.value.nameForAnime,
        DescriptionAnime:this.form.value.description,
        UrlImagen:this.form.value.urlImage,
        UrlVideo:this.form.value.urlVideo,
        Episodes:this.form.value.episodes
      }
      console.log(this.data);
      /* await this.api.addAnime(this.data).subscribe(res => {
        alert(res.toString());
      }); */
    }
    else{
      this.form.markAllAsTouched();
    }
  }


  ngOnInit(): void {
  }

}
