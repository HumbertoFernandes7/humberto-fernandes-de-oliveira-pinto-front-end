import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
}





