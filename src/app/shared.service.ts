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

  entrarAdmin(user:any, pass:any){
      if(user==="admin" && pass ==="123456"){
      this.isAdmin = true;
      }
  }

  getEmisionAnime(){
    return this.http.get(this. APIJikanAnime + '/AnimeByState/1/default/1').pipe(map(anime => anime['animes']));
  }
  getLatestEpisodesAnime(){
    return this.http.get(this. APIJikanAnime + 'LatestEpisodesAdded').pipe(map(anime => anime['episodes']));
  }
  getServerEpisodesAnime(id:any){
    return this.http.get(this. APIJikanAnime + 'GetAnimeServers/' + id).pipe(map(anime => anime['servers']));
  }

  getSearchQuery(anime:any){
    return this.http.get(this. APIJikanAnime +'Search/'+ anime).pipe(map(anime => anime['search']));

  }


  commingSonAnime(){
    return this.http.get(this.APIJikanAnime + 'AnimeByState/3/default/1').pipe(map(comingAnime => comingAnime['animes']));
  }

  topAnime(){
    return this.http.get(this.APIJikanAnime + 'AnimeByState/2/rating/1').pipe(map(comingAnime => comingAnime['animes']));
  }


  getOneAnime(id:any,title:any){
    return this.http.get(this.APIJikanAnime + '/GetAnimeInfo/' + id +'/'+title ).pipe(map(data=> data['info']));
  }


  async AgregarFavoritos(url:string,body:any){
    return await this.http.post(url,body).toPromise();
  }


  GetUsuariosExternos(email:string){
    return this.http.get(`https://kamel-6e19d.firebaseio.com/usuario.json?orderBy="email"&equalTo="${email}"&print=pretty`)
  }

  GoogleFacebook(url:string,body:any){
    return this.http.post(url,body).toPromise().catch((err)=>{err});
  }


  async GetIDUser(url:string){
    return await this.http.get(url).toPromise();
  }


  async LogOut(url:string){
    return await this.http.get(url).toPromise();
  }

  Carga( archivos:string[] ){

    for(let a of archivos){
      let script = document.createElement("script");
      script.src = "../assets/js/" + a + ".js";
      let body = document.getElementsByTagName("body")[0];
      body.appendChild( script );
    }
  }




  /*
  addAnime(body:any){
    return this.http.post(this.APIUrlAnime + '/anime/',body);
  }
  putAnime(body:any){
    return this.http.put(this.APIUrlAnime + '/anime/',body);
  }
  deleteAnime(id:any){
    return this.http.delete(this.APIUrlAnime + '/anime/'+id);
  } */
}
