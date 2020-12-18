import { Component, OnInit } from '@angular/core';
/* Firebase */
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
/* Router */
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public isLogin:boolean;

  constructor(public auth: AngularFireAuth, public router:Router,public api:SharedService) {}

  public LoginWithGoogle() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(result => {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      // The signed-in user info.
      var user = result.user;
      this.api.user = user;
      this.api.GetUsuariosExternos(user.email).toPromise()
      .then((data)=>{
        if(Object.keys(data).length === 0){
          let body = {
            user: user.displayName,
            email: user.email,
          };
          this.api.GoogleFacebook(`https://kinder-mountie-14642.herokuapp.com/userexternos`,body)
          .then((data)=>{
            this.api.id = data;
            this.api.isLogin = true;

            this.isLogin = true;
            console.log(this.api.id);
            this.router.navigate(['/moverUser',this.api.id]);})
          .catch((err)=>{console.log(err)})

         /*   */
         this.api.isLogin = true;
      this.isLogin = true;
      this.router.navigate(['/moverUser',this.api.id]);
            } else{
              this.api
              .GetIDUser(`https://kinder-mountie-14642.herokuapp.com/getID/${user.email}`)
              .then((data) => {

                this.api.id = data;
                this.api.isLogin = true;

                this.isLogin = true;
                console.log(this.api.id);
                this.router.navigate(['/moverUser',this.api.id]);
              });

            }
        });

    })
  }


  public LoginWithFacebook() {
    this.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(result => {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      // The signed-in user info.
      var user = result.user;
      this.api.user = user;
      this.api.GetUsuariosExternos(user.email).toPromise()
      .then((data)=>{
        if(Object.keys(data).length === 0){
          let body = {
            user: user.displayName,
            email: user.email,
          };
          this.api.GoogleFacebook(`https://kinder-mountie-14642.herokuapp.com/userexternos`,body)
          .then((data)=>{ this.api.id = data;
            this.api.isLogin = true;

            this.isLogin = true;
            console.log(this.api.id);
            this.router.navigate(['/moverUser',this.api.id]);})
          .catch((err)=>{console.log(err)})

         /*   */
      this.api.isLogin = true;
      this.isLogin = true;
      this.router.navigate(['/moverUser',this.api.id]);
            }else{
              this.api
              .GetIDUser(`https://kinder-mountie-14642.herokuapp.com/getID/${user.email}`)
              .then((data) => {
                this.api.id = data;
                this.api.isLogin = true;

                this.isLogin = true;
                console.log(this.api.id);
                this.router.navigate(['/moverUser',this.api.id]);
              });

            }
        });

    })
  }
  public LoginWithGithub() {
    this.auth.signInWithPopup(new firebase.auth.GithubAuthProvider()).then(result =>{
    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    // The signed-in user info.
    var user = result.user;
    this.api.user = user;
    this.isLogin = true;
    this.router.navigate(['/moverUser',this.api.id]);
    });
  }


  ngOnInit(): void {
  }

}
