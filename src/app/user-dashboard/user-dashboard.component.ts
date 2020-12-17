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

  items: Observable<any>;

  constructor(public activatedRoute: ActivatedRoute,public db: AngularFireDatabase,public api:SharedService) {
    this.itemList = this.db.list("usuario/"+this.api.id+"/favoritos");
    this.items = this.db.list("usuario/"+this.api.id+"/favoritos").valueChanges();
    this.items = this.itemList.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );

    this.activatedRoute.params.subscribe(params=>{
       this.api.getOneAnime(params['id'],params['title']).subscribe(data => {
         this.anime = data;
         console.log(this.anime);
         let body = {
          nombre:this.anime,
          id:this.api.id
        }

        this.api.AgregarFavoritos(`https://kinder-mountie-14642.herokuapp.com/fav`,body);
       });


     /*   */

    })
    console.log(this.items);
   }


  ngOnInit(): void {
    if(this.api.user){
      this.dataUser = this.api.user ;
      this.api.isLogin = true;
    }

  }


}
