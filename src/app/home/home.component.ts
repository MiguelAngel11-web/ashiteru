import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allEmision=[];
  allCommingSon=[];
  allTopAnimes=[];
  allLatestEpisodesAnime
  stringText = "https://animeflv.net/uploads/animes/banners/3355.jpg"

  constructor(public service:SharedService,private domSanitizer:DomSanitizer) {

    service.getLatestEpisodesAnime().subscribe(data =>{
      this.allLatestEpisodesAnime = data;
    })

    service.getEmisionAnime().subscribe(data =>
      {
        this.allEmision = data;

      });



    service.commingSonAnime().subscribe(data =>{
      this.allCommingSon = data;
    })

    service.topAnime().subscribe(data =>{
      this.allTopAnimes = data;
    })
  }

  ngOnInit(): void {
  }

}
