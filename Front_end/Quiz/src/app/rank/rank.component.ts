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
    setTimeout(() => {
      this.listar();
    }, 1000);

  }

  private listar(){
      return this.jogadorService.listar().subscribe((jogador) => {
        this.listaDeJogadores = jogador
      }, error => console.log(error));
  }



}
