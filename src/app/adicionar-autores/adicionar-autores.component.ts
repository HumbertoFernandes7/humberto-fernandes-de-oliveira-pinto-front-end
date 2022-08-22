import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adicionar-autores',
  templateUrl: './adicionar-autores.component.html',
  styleUrls: ['./adicionar-autores.component.css']
})
export class AdicionarAutoresComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  solicitacaoErroGenerico(){
    alert("Função indisponivel !")
  }
}
