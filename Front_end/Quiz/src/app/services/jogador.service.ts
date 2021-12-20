import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Jogador } from '../model/jogador';

@Injectable({
  providedIn: 'root'
})
export class JogadorService {

  private url:string;

  constructor(private httpClient: HttpClient) {
   this.url = 'http://localhost:8099/quiz/jogador';
  }

  listar():Observable<Jogador[]> {
    return this.httpClient.get<Jogador[]>(this.url);
  }
}
