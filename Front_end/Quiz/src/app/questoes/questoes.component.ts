import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Jogador } from '../model/jogador';
import { Questoes } from '../model/questoes';
import { QuestoesService } from '../services/questoes.service';


@Component({
  selector: 'app-questoes',
  templateUrl: './questoes.component.html',
  styleUrls: ['./questoes.component.css']
})
export class QuestoesComponent implements OnInit {

  protected jogador = {} as Jogador;
  public nome:string ="";
  listaQuestoes:Questoes[] = [];
  public contador:number = 0;
  public pontos:number = 0;
  counter = 60;
  respostaErrada:number = 0;
  certaResposta:number = 0;
  interval$:any
  progesso:string ="0";
  isCompletado:boolean =false;

  
  constructor(private questaoService:QuestoesService) { 
    this.listar;
    this.salvarJogador;
  }

  ngOnInit(): void {
    this.nome = localStorage.getItem("nome")!;
    this.listar();
    this.comecarTempo();
  }

  private listar(){
    this.questaoService.listar().subscribe((questoes)=> this.listaQuestoes = questoes);
  }

  proximo(){
     this.contador++;
  }

  anterior(){
    this.contador--;
  }

  resposta(opcao:boolean,conte:number){

    if(opcao){
      this.pontos += 100;
      this.certaResposta++;
      setTimeout(() => {
      this.getProgresso();
      this.contador++;
      this.resetContador;
      }, 1000);
    }
    else{
      setTimeout(() => {
        this.respostaErrada ++;
        this.getProgresso();
        this.contador++;
        this.resetContador;
      }, 1000);
      this.pontos -=50;
      if(this.pontos  < 0 ){
        this.pontos=0;
      }
      if(conte === 14){
        this.isCompletado = true;
        this.pararTempo();
     }
      
    }
  }

  comecarTempo(){
     this.interval$ = interval(1000)
     .subscribe(val=>{
      this.counter--;
      if(this.counter===0) {
        this.isCompletado = true;
        this.pararTempo();
      }
    });
    setTimeout(() => {
      this.interval$.unsubscribe();
    }, 600000);
  }

  pararTempo(){
    this.interval$.unsubscribe();
    this.counter = 0;
  }

  resetContador(){
    this.pararTempo();
    this.counter=60;
    this.comecarTempo();
  }

  resetQuiz(){
    this.resetContador();
    this.listar();
    this.pontos =0;
    this.counter=60;
    this.contador=0;
    this.progesso="0";
  }

  getProgresso(){
    this.progesso = (((this.contador+1)/14)*100).toString();
    return this.progesso;
  }

  salvarJogador(){
     this.jogador.nameUser = this.nome;
     this.jogador.pontos = this.pontos;
     this.questaoService.salvar(this.jogador);
  }


}
