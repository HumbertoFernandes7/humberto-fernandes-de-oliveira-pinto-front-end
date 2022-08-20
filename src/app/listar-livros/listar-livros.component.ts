import { Component, OnInit } from '@angular/core';
import { livros } from '../models/livros';
import { LivroService } from '../service/livro-service/livro-service';

@Component({
  selector: 'app-listar-livros',
  templateUrl: './listar-livros.component.html',
  styleUrls: ['./listar-livros.component.css']
})
export class ListarLivrosComponent implements OnInit {

  livros: livros[] = []

  erroListaLivro: string = ''
  erroRemoverLivro: string = ''
  sucessoRemoverLivro: string = ''

  erroAlterarLivro: string = ''
  sucessoAlterarLivro: string = ''

  erroAdicionarLivro: string = ''
  sucessoAdicionarLivro: string = ''


  constructor(private livroService: LivroService) { }

  ngOnInit(): void {
    this.buscaTodos()
  }


  buscaTodos(){
    this.livroService.listarTodosLivros().subscribe(successData=> {
      this.livros = successData
    },error=> {
      this.erroListaLivro = 'Ocorreu um erro ao buscar os livros'
    })
  }


    solicitacaoRemocaoLivro(livro: livros) {
      this.erroRemoverLivro = ''
      this.sucessoRemoverLivro = ''
      let text = "deseja remover: " + livro.titulo
      
      if(confirm(text) == true) {
        this.livroService.removerLivro(livro.id).subscribe(successData=>{
          this.sucessoRemoverLivro = "Livro: " + livro.titulo + " removido com sucesso"
          this.buscaTodos()
        },error=>{
          this.erroRemoverLivro = "Ocorreu um erro ao remover: " + livro.titulo 
          
        })
      }
    }
  
  
}
// solicitacaoAlterarLivro(livro: livros){
  //   this.erroAlterarLivro = ''
  //   this.sucessoAlterarLivro = ''
  //   let text = "deseja alterar " + livro.titulo
  
  //   if(confirm(text) == true) {
    //     console.log("livro alterado");
    //   }else{
      //     console.log("LIVRO NAO ALTERADO");
    
      //   }
      // }

      // solicitacaoAdicionarLivro(){
      //   this.erroAdicionarLivro = ''
      //   this.sucessoAdicionarLivro = ''
      //   let text = "deseja adicionar um livro ? "
    
      //    if(confirm(text) == true) {
      //    console.log("adicionado")
      // }else{
      //   console.log("nao adicionado");
      //   }
      // }