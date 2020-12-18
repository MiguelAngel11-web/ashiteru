import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrlAnime = "http://127.0.0.1:8000";
  readonly APIJikanAnime = "http://localhost:5000/api/v1/";
  isAdmin:boolean = false;

  user:any;
  id:any;
  isLogin:boolean=false;


  constructor(private http:HttpClient) { }

  /* Metodo get para recuperar los animer que están en emision. Se apunta a la APi de Jikan */
  getEmisionAnime(){
    return this.http.get(this. APIJikanAnime + '/AnimeByState/1/default/1').pipe(map(anime => anime['animes']));
  }
  /* Ultimos episodios que han sido agredados ese mismo día. Hacemos la petición get para recuperar los datos de la api Jikan */
  getLatestEpisodesAnime(){
    return this.http.get(this. APIJikanAnime + 'LatestEpisodesAdded').pipe(map(anime => anime['episodes']));
  }
  /* Para los videos de cada episodios sacamos su infromación para que disfrutemos los episidoios :) */
  getServerEpisodesAnime(id:any){
    return this.http.get(this. APIJikanAnime + 'GetAnimeServers/' + id).pipe(map(anime => anime['servers']));
  }

  /* Busqueda de un anime, pasamos el nmbre dijitado por el usuario y hacemos peticion para que nos muestre los animes con esa relación */
  getSearchQuery(anime:any){
    return this.http.get(this. APIJikanAnime +'Search/'+ anime).pipe(map(anime => anime['search']));

  }

  /* Animes que vienen proximamente */
  commingSonAnime(){
    return this.http.get(this.APIJikanAnime + 'AnimeByState/3/default/1').pipe(map(comingAnime => comingAnime['animes']));
  }


  /* Ultimos animes agregados */
  latestAnimeAdde(){
    return this.http.get(this.APIJikanAnime + 'LatestAnimeAdded').pipe(map(latestAnime => latestAnime['animes']));
  }

  /* Información detallada de el aniem seleccionada */
  getOneAnime(id:any,title:any){
    return this.http.get(this.APIJikanAnime + '/GetAnimeInfo/' + id +'/'+title ).pipe(map(data=> data['info']));
  }


  /* Agregamos con post el favorito que selecciono el usuario,pasamos la url del sercviodr y los datos para insertar en la bd */
  async AgregarFavoritos(url:string,body:any){
    return await this.http.post(url,body).toPromise();
  }

/* Para agregar los usuarios */
  GetUsuariosExternos(email:string){
    return this.http.get(`https://kamel-6e19d.firebaseio.com/usuario.json?orderBy="email"&equalTo="${email}"&print=pretty`)
  }

  /* Agregamos los datos email y name del usuario por google o facebook y los mandamos a la base de datos */
  GoogleFacebook(url:string,body:any){
    return this.http.post(url,body).toPromise().catch((err)=>{err});
  }

  /* Sacamos el id del usuario */
  async GetIDUser(url:string){
    return await this.http.get(url).toPromise();
  }

  /* Salimos de la cuenta y borramos registros */
  async LogOut(url:string){
    return await this.http.get(url).toPromise();
  }

  /* Cargamos el js para los comentarios */
  Carga( archivos:string[] ){

    for(let a of archivos){
      let script = document.createElement("script");
      script.src = "../assets/js/" + a + ".js";
      let body = document.getElementsByTagName("body")[0];
      body.appendChild( script );
    }
  }


}
