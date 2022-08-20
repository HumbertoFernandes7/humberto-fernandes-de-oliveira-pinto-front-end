import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { livros } from 'src/app/models/livros';
import { alteraLivros } from 'src/app/models/alteraLivros';

const URL_API = environment.api_url + "/livros";

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  constructor(private httpClient: HttpClient) { }

  listarTodosLivros(): Observable<livros[]> {
    return this.httpClient.get<livros[]>(URL_API)
  }


  adicionarLivro() {
  }


  atualizarLivro(livro: alteraLivros, id: number) {
   return this.httpClient.put(`${URL_API}/${id}`, livro)
  }
    

  removerLivro(id: number): Observable<void> {
    return this.httpClient.delete<void>(URL_API + "/" + id)
  }
}
