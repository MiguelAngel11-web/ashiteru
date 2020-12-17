import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';
import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'app-anime-details',
  templateUrl: './anime-details.component.html',
  styleUrls: ['./anime-details.component.css']
})
export class AnimeDetailsComponent implements OnInit {

  animeOne=[];
  videos = [];
  title:any;
  constructor(public activatedRoute: ActivatedRoute,public api:SharedService,private domSanitizer:DomSanitizer) {

    this.activatedRoute.params.subscribe( params => {
    this.title = params['title'];
    this.api.getOneAnime(params['id'],params['title']).subscribe(
      (data:any)=> {
      this.animeOne = data;
      console.log(this.animeOne);
    })

    });

  }

  ngOnInit(): void {
  }

}
