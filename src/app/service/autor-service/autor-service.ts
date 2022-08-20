import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { alteraAutor } from 'src/app/models/alteraAutor';
import { autores } from 'src/app/models/autores';
import { environment } from 'src/environments/environment';

const URL_API = environment.api_url + "/autores";

@Injectable({
  providedIn: 'root'
})
export class AutorService{

  constructor(private httpClient: HttpClient) { }

  listarTodosAutores(): Observable<autores[]>{
    return this.httpClient.get<autores[]>(URL_API)
  }

  adicionarAutor(){
  }

  atualizarAutor(autor: alteraAutor, id:number){
    return this.httpClient.put(`${URL_API}/${id}`, autor)
  }


  removerAutor(id: number): Observable<void> {
    return this.httpClient.delete<void>(URL_API + "/" + id)
  }


}

