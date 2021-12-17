import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Questoes } from '../model/questoes';
import { QuestoesService } from '../services/questoes.service';


@Component({
  selector: 'app-questoes',
  templateUrl: './questoes.component.html',
  styleUrls: ['./questoes.component.css']
})
export class QuestoesComponent implements OnInit {

  public nome:string ="";
  listaQuestoes:Questoes[] = [];
  public contador:number = 0;
  public pontos:number = 0;
  counter = 60;
  respostaErrada:number = 0;
  certaResposta:number = 0;
  intervalo$:any
  progesso:string ="0";
  
  constructor(private questaoService:QuestoesService) { 
    this.listar
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

  resposta(opcao:any,conte:number){
    if(opcao === this.listaQuestoes[conte]?.resposta){
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
      
      
    }
  }

  comecarTempo(){
   this.intervalo$ = interval(1000).
   subscribe(val=>{
     this.counter--;
     if(this.counter===0) {
       this.contador++;
       this.counter=60;
       this.pontos-=10;
     }
    });
    setTimeout(() => {
      this.intervalo$.unsubscribe();
    }, 600000);
  }

  pararTempo(){
    this.intervalo$.unsubscribe();
    this.counter = 0;
  }

  resetContador(){
    this.pararTempo();
    this.counter =60;
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


}
