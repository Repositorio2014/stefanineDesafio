import { AutorService } from './services/autor.service';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { AppHttpService } from '../app/app-http.service';
import { TaskService } from "./services/Task.Service";
import { Task } from "./services/task";
import { Autor } from "./services/autor";
import { Router, ActivatedRoute, Params } from '@angular/router'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontfiabilite';

  private autor: Autor = new Autor();
  private autores: Autor[] = new Array();

  private task: Task = new Task();
  private tasks: Task[] = new Array();

  constructor(
    private httpService: AppHttpService,
    private autorService: AutorService,
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router,
    private http: Http
    ){}

  ngOnInit(){
    return this.findAll();
  }

  findAll(): void{
    this.autorService.findAll().subscribe(res => {
      console.log(res); 
      this.autores = res;
    })
  }

  // create():void{
  //   this.taskService.create(this.task)
  //       .subscribe(response => {
  //           return this.findAll();
  //       })
  // }

  // delete(id: number){
  //   this.httpService.delete(id)
  //   .then((res) => {
  //     return this.findAll();
  //   })
  // }

  // update(id: number, data: Task){
  //   this.httpService.update(id, data)
  //   .then((res) => {
  //     return this.findAll();
  //   })
  // }

}
