import { AppHttpService } from './../app-http.service';
import { AutorService } from './autor.service';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Autor } from "./autor";

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  //styleUrls: ['./home.component.css']
})
export class AutorComponent implements OnInit {

  private autor: Autor = new Autor();
  private autores: Autor[] = new Array();

  constructor(
    private httpService: AppHttpService,
    private autorService: AutorService,
    private route: ActivatedRoute,
    private router: Router,
    private http: Http
  ) { }

  ngOnInit(){
    return this.findAll();
  }

  findAll(): void{
    this.autorService.findAll().subscribe(res => {
      console.log(res); 
      this.autores = res;
    })
  }

}
