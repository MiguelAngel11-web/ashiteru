import { Component, Input, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { SharedService } from '../shared.service';

import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogin = false;
  user:any;


  constructor(private router : Router,public api:SharedService,public auth: AngularFireAuth) {

   }

  busquedaAnime(anime:string){
    this.router.navigate(['/busqueda',anime]);
  }

  async Salir(){
    if(this.isLogin){
      this.auth.signOut().then(function() {
    // Sign-out successful.
        console.log("Data");
  }).catch(function(error) {
    // An error happened.
    console.log(error);
  });
      }
      this.isLogin = false;
      this.user = null;
    await this.api.LogOut(`https://kinder-mountie-14642.herokuapp.com/salir`)
    .then((res:any)=>{
      if(res){
      this.api.user = null;
      }
    })



  }

  ngOnInit(): void {

    if(this.api.isLogin){
      this.user = this.api.user;
      this.isLogin = true;
    }
  }

}
