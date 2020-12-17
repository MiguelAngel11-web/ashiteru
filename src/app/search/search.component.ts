import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SharedService } from '../shared.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  buscando:boolean;
  animeEncontrado=[];

  constructor(public activatedRoute: ActivatedRoute,public api:SharedService) {
    this.activatedRoute.params.subscribe( params => {
      this.getOnlyAnime(params['title']);
    })
  }

  getOnlyAnime(anime:string){
    this.buscando = true;
    this.api.getSearchQuery(anime).subscribe(data => {console.log(data);this.animeEncontrado=data});
  }

  ngOnInit(): void {
  }

}
