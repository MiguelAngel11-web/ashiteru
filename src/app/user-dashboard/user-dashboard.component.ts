import { Component, Input, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import {SharedService} from '../shared.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  dataUser:any;
  favoritos:[]=[];
  anime=[];
  itemList: AngularFireList<any>;
  id:any;

  items: Observable<any>;

  title:string;

  constructor(public activatedRoute: ActivatedRoute,public db: AngularFireDatabase,public api:SharedService) {


    this.activatedRoute.params.subscribe(params=>{
      this.title = params['title'];
      this.id = params['user'];
      this.itemList = this.db.list("usuario/"+this.id+"/favoritos");
      this.items = this.db.list("usuario/"+this.id+"/favoritos").valueChanges();
      this.items = this.itemList.snapshotChanges().pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      );
       this.api.getOneAnime(params['id'],params['title']).subscribe(data => {
         this.anime = data;
         let body = {
          nombre:this.anime,
          id:this.id
        }

        this.api.AgregarFavoritos(`https://kinder-mountie-14642.herokuapp.com/fav`,body);
       });

    })
   }


  ngOnInit(): void {
    if(this.api.user){
      this.dataUser = this.api.user ;
      this.api.isLogin = true;
    }

  }


}
