import { ListarLivrosComponent } from './listar-livros/listar-livros.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListarAutoresComponent } from './listar-autores/listar-autores.component';


const routes: Routes = [

  {
    path:'',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'listar-livros',
    component: ListarLivrosComponent
  },
  {
    path:'listar-autores',
    component: ListarAutoresComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
