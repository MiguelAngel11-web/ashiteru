import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargarScriptsService {

  constructor() { }

  Carga( archivos:string[] ){

    for(let a of archivos){
      let script = document.createElement("script");
      script.src = "../assets/js/" + a + ".js";
      let body = document.getElementsByTagName("body")[0];
      body.appendChild( script );
    }
  }


}
