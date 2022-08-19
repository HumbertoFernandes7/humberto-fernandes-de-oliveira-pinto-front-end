import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { livros } from 'src/app/models/livros';

const URL_API = environment.api_url + "/livros";

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  constructor(private httpCliet: HttpClient) { }

  listarTodosLivros(): Observable<livros[]> {
    return this.httpCliet.get<livros[]>(URL_API)
  }

  atualizarLivro(){
    return null
  }

  adicionarLivro() {
    return null
  }

  removerLivro(id: number): Observable<void> {
    return this.httpCliet.delete<void>(URL_API + "/" + id)
  }
}
