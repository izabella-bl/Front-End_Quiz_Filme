import { Component, OnInit } from '@angular/core';
import { findIndex } from 'rxjs';
import { Jogador } from '../model/jogador';
import { JogadorService } from '../services/jogador.service';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.css']
})
export class RankComponent implements OnInit {

  listaDeJogadores:Jogador[] = [];
 
  constructor(private jogadorService:JogadorService) { 
    this.listar
  }
   
  ngOnInit(): void {
    this.listar();
  }

  private listar(){
      return this.jogadorService.listar().subscribe((jogador) => {
        this.listaDeJogadores = jogador
      }, error => console.log(error));
  }

 

}
