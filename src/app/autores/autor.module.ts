import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaAutorComponent } from './lista-autor/lista-autor.component';
import { FormularioAutorComponent } from './formulario-autor/formulario-autor.component';

@NgModule({
  declarations: [
    ListaAutorComponent,
    FormularioAutorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AutorModule { }
