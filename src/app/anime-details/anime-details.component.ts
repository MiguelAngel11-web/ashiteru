import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';



@Component({
  selector: 'app-anime-details',
  templateUrl: './anime-details.component.html',
  styleUrls: ['./anime-details.component.css']
})
export class AnimeDetailsComponent implements OnInit {

  animeOne=[];
  videos = [];
  title:any;
  user = [];

  comentarios = [];

  constructor(public activatedRoute: ActivatedRoute,public api:SharedService) {

    this.activatedRoute.params.subscribe( params => {
    this.title = params['title'];
    this.api.getOneAnime(params['id'],params['title']).subscribe(
      (data:any)=> {
      this.animeOne = data;
    })

    });

    this.api.Carga(["comment"]);

    this.comentarios = [
      {
          comentario: "Buena imagen",
          username: "mike"
      },
      {
          comentario: "No me gusta",
          username: "otro_usuario"
      }
    ]

  }


  ngOnInit(): void {

    if(this.api.isLogin){
    this.user = this.api.user;
    }

  }

}
