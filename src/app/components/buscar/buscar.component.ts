import { Component, OnInit } from '@angular/core';
import {HeroesService, Heroe} from '../../servicios/heroes.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
})
export class BuscarComponent implements OnInit {

  heroes:Heroe[]=[]; //Variable para los heroes

//_heroesService variable del component
  constructor(private _buscarService:HeroesService,
              private activatedRoute: ActivatedRoute,
              ) { }

  ngOnInit() {

    //this.heroes=this._buscarService.buscarHeroes();
    this.activatedRoute.params.subscribe(params =>{
        //console.log(params['id']);
        this.heroes = this._buscarService.buscarHeroes(params['termino']);
        console.log(this.heroes);
    })

  }
  }
