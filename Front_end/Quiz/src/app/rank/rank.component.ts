import { Component, OnInit } from '@angular/core';
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
    
  }

  private listar(){
    this.jogadorService.listar().subscribe(  (jogador)=> this.listaDeJogadores=jogador);
  }

}
