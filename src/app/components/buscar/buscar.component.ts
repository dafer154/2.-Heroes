import { Component, OnInit } from '@angular/core';
import {HeroesService, Heroe} from '../../servicios/heroes.service';
//Captura el parametro de la Url
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
})
export class BuscarComponent implements OnInit {

  heroes:any[]=[]; //Variable para los heroes
  termino:string;

//_heroesService variable del component
  constructor(private _heroesService:HeroesService,
              private activatedRoute: ActivatedRoute,
              ) { }

  ngOnInit() {

    //this.heroes=this._buscarService.buscarHeroes();
    this.activatedRoute.params.subscribe(params =>{

        console.log(params['termino']);

        this.termino = (params['termino']);
        //console.log(params['id']);
        this.heroes = this._heroesService.buscarHeroes(params['termino']);
        console.log(this.heroes);
    })

  }
  }
