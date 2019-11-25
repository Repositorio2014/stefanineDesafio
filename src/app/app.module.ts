import { AutorModule } from './services/autor.module';
import { AutorService } from './services/autor.service';
import { Autor } from './services/autor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule, routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { TaskService } from "./services/Task.Service";
import { TaskModule } from "../app/services/task.module";
import { TaskEditComponent } from './task-edit/task-edit.component';
import { AutorComponent } from './services/autor.component';
import { HomeComponent } from './home/home.component';
import { AutorCreateComponent } from './autor-create/autor-create.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TaskEditComponent,
    HomeComponent,
    AutorComponent,
    AutorCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    TaskModule,
    AutorModule,
    routing
  ],
  providers: [TaskService, AutorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
