import { ListarLivrosComponent } from './listar-livros/listar-livros.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListarAutoresComponent } from './listar-autores/listar-autores.component';
import { AlterarLivrosComponent } from './alterar-livros/alterar-livros.component';
import { AlterarAutoresComponent } from './alterar-autores/alterar-autores.component';
import { AdicionarLivrosComponent } from './adicionar-livros/adicionar-livros.component';
import { AdicionarAutoresComponent } from './adicionar-autores/adicionar-autores.component';

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
    path:'adicionar-livros',
    component: AdicionarLivrosComponent
  },
  {
    path:'alterar-livros',
    component: AlterarLivrosComponent
  },
  {
    path:'listar-autores',
    component: ListarAutoresComponent
  },
  {
    path:'adicionar-autores',
    component: AdicionarAutoresComponent
  },
  {
    path:'alterar-autores',
    component: AlterarAutoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
