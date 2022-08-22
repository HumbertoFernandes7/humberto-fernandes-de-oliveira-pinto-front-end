import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alterar-autores',
  templateUrl: './alterar-autores.component.html',
  styleUrls: ['./alterar-autores.component.css']
})
export class AlterarAutoresComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  solicitacaoErroGenerico(){
    alert("Função indisponivel !")
  }
}
