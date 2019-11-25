import { Observable } from 'rxjs/Observable';
import { AutorService } from './../services/autor.service';
import { AppHttpService } from './../app-http.service';
import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestMethod, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Autor } from "./../services/autor";

@Component({
  selector: 'app-autor-create',
  templateUrl: './autor-create.component.html',
  styleUrls: ['./autor-create.component.css']
})
export class AutorCreateComponent implements OnInit {

  private autor: Autor = new Autor();
  private autores: Autor[] = new Array();
  private url: string = 'https://localhost:44313/api/autores';

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

  create(autor: Autor): void{
    this.autorService.create(autor)
    .subscribe(response => {
      return this.findAll();
  })
  }
}
