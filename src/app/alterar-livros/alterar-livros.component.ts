import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alterar-livros',
  templateUrl: './alterar-livros.component.html',
  styleUrls: ['./alterar-livros.component.css']
})
export class AlterarLivrosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  solicitacaoErroGenerico(){
    alert("Função indisponivel !")
  }
}
