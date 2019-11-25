import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
//import { AppSharedComponentsModule } from '../app/app-shared-components.module';
import { AppHttpService } from '../app-http.service';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { AutorComponent } from './autor.component';

const APP_ROUTES: Routes = [
    { path: '', component: AppComponent },
    { path: 'app-autor', component: AutorComponent }
  ]
@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    FormsModule,
  ],
  declarations: [
    
  ],
  //bootstrap: [],
  providers: [AppHttpService],
})

export class AutorModule {}