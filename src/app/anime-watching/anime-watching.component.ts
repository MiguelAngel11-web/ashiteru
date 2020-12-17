import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-anime-watching',
  templateUrl: './anime-watching.component.html',
  styleUrls: ['./anime-watching.component.css']
})
export class AnimeWatchingComponent implements OnInit {

  idverAnime:any;
  returnEpisodes=[];
  watchAnime=[];
  videoUrl:any;
  eligioServer=false;

  constructor(public activatedRoute: ActivatedRoute,public api:SharedService,private sanitizer: DomSanitizer) {

    this.activatedRoute.params.subscribe( params => {
      this.idverAnime = params['id'];
      this.api.getLatestEpisodesAnime().subscribe( (data:any) => {

        this.returnEpisodes = data;
        this.returnEpisodes.forEach( (data) => {
          if(this.idverAnime == data.id){
              this.watchAnime = data;
             this.selectServer(this.watchAnime['servers'][0].code);
          }

        })
      })

      });


  }

  selectServer(server:any){
    console.log(server);
    this.videoUrl = this.transform(server);
    this.eligioServer = true;
  }

  transform(server:any){
  return this.sanitizer.bypassSecurityTrustResourceUrl(server);
  }

  ngOnInit(): void {
  }

}
