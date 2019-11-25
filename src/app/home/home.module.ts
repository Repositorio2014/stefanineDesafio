import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
//import { AppSharedComponentsModule } from '../app/app-shared-components.module';
import { AppHttpService } from '../app-http.service';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';

import { TaskUpdateComponent } from '../services/task.update.component';
import { TaskEditComponent } from '../task-edit/task-edit.component';

const APP_ROUTES: Routes = [
    { path: '', component: AppComponent },
    { path: 'tasks/:id', component: TaskEditComponent }
  ]
@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    FormsModule,
  ],
  declarations: [
    TaskUpdateComponent
  ],
  //bootstrap: [],
  providers: [AppHttpService],
})

export class HomeModule {}