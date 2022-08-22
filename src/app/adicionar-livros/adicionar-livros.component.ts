import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adicionar-livros',
  templateUrl: './adicionar-livros.component.html',
  styleUrls: ['./adicionar-livros.component.css']
})
export class AdicionarLivrosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  solicitacaoErroGenerico(){
    alert("Função indisponivel !")
  }
}
