import { AutorCreateComponent } from './autor-create/autor-create.component';
import { AutorComponent } from './services/autor.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { HomeComponent } from './home/home.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'autor', component: AutorComponent },
  { path: 'autor-create', component: AutorCreateComponent }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }