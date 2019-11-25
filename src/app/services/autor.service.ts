import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Headers } from "@angular/http";
import { RequestOptions } from "@angular/http";

import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'; 
import { Autor } from "./autor";

@Injectable()
export class AutorService{

    private headers: Headers;
    private options: RequestOptions;
    private url: string = 'https://localhost:44313/api/autores';

    constructor(private http: Http){
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new RequestOptions({headers: this.headers});
    }

    findAll(): Observable<Autor[]>{
        return this.http
                   .get(this.url)
                   .map((res: Response) => res.json()); 
    }

    create(autor: Autor): Observable<Autor> {
        return this.http
                   .post(this.url, JSON.stringify(autor), this.options)
                   .map((res: Response) => res.json());
    }

    // delete(id: number){
    //     console.log("aqui taskservice");
    //     return this.http.delete(this.getTaskUrl(id))
    //                .map(res => res.json());
    // }

    // private getTaskUrl(id){
    //     return this.url + "/" + id;
    //   }

}