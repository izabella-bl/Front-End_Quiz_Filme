import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Questoes } from '../model/questoes';
import { Jogador } from '../model/jogador';

@Injectable({
  providedIn: 'root'
})
export class QuestoesService {
  private url:string;

  constructor(private httpClient: HttpClient) {
   this.url = 'http://localhost:8099/quiz/questoes';
  }
  
  listar():Observable<Questoes[]> {
    return this.httpClient.get<Questoes[]>(this.url);
  }

  salvar(jogador:Jogador):Observable<string>{
    return this.httpClient.post(this.url, jogador, {responseType: 'text'})
  }

}
