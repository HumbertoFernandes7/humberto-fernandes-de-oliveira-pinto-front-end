import { Component, OnInit } from '@angular/core';
import { autores } from '../models/autores';
import { AutorService } from '../service/autor-service/autor-service';

@Component({
  selector: 'app-listar-autores',
  templateUrl: './listar-autores.component.html',
  styleUrls: ['./listar-autores.component.css']
})
export class ListarAutoresComponent implements OnInit {

  autores: autores[] = []

  erroListaAutores: string = ''

  constructor(private autorService: AutorService) { }

  ngOnInit(): void {
  }
  
  // buscarTodos(){
  //   this.autorService.listarTodosAutores().subscribe(successData=> {
  //     this.autorService = successData
  //   },error=> {
  //     this.erroListaAutores = 'Ocorreu um erro ao buscar os livros'
  //   })
  // }
  
}
