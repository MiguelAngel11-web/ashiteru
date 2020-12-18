import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../../shared.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-anime-watch-ep',
  templateUrl: './anime-watch-ep.component.html',
  styleUrls: ['./anime-watch-ep.component.css']
})
export class AnimeWatchEpComponent implements OnInit {

  idverAnime:any;
  returnEpisodes=[];
  videoUrl:any;
  eligioServer=false;
  title:any;
  episode:any;

  constructor(public activatedRoute: ActivatedRoute,public api:SharedService,private sanitizer: DomSanitizer) {
    this.api.Carga(["comment"]);
    /* Sacamos la informacion con el id, y guardamos el titulo y ep cuando vamosa  verlo */
    this.activatedRoute.params.subscribe( params => {
      this.idverAnime = params['id'];
      this.title = params['title'];
      this.episode = params['ep'];
      this.api.getServerEpisodesAnime(this.idverAnime).subscribe( (data:any) => {

        this.returnEpisodes = data;
        this.selectServer(this.returnEpisodes[0].code);
      })

      });
  }

  selectServer(server:any){
    this.videoUrl = this.transform(server);
    this.eligioServer = true;
  }

  transform(server:any){
  return this.sanitizer.bypassSecurityTrustResourceUrl(server);
  }

  ngOnInit(): void {
  }

}
