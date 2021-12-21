import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Jogador } from '../model/jogador';
import { Questoes } from '../model/questoes';
import { JogadorService } from '../services/jogador.service';
import { QuestoesService } from '../services/questoes.service';


@Component({
  selector: 'app-questoes',
  templateUrl: './questoes.component.html',
  styleUrls: ['./questoes.component.css']
})
export class QuestoesComponent implements OnInit {
  
  jogador:Jogador = new Jogador;
  public nome:string ="";
  listaQuestoes:Questoes[] = [];
  public contador:number = 0;
  public pontos:number = 0;
  counter = 80;
  respostaErrada:number = 0;
  certaResposta:number = 0;
  interval$:any
  progesso:string ="0";
  isCompletado:boolean =false;

  
  constructor(private questaoService:QuestoesService,private jogadorService:JogadorService) { 
    this.listar;
  }

  ngOnInit(): void {
    this.nome = localStorage.getItem("nome")!;
    this.listar();
    this.comecarTempo();
    this.jogador.nameUser = this.nome;
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
      setTimeout(() => {
        this.certaResposta++;
        this.getProgresso();
        this.contador++;
      }, 2000);
      
      this.resetContador;
      
    }
    else{
      setTimeout(() => {
        this.respostaErrada ++;
        this.getProgresso();
        this.contador++;
        this.resetContador;
      }, 2000);
     
      this.pontos -=50;
      if(this.pontos  < 0 ){
        this.pontos=0;
      }
    }
    
    if(conte === 14){
      this.isCompletado = true;
      this.pararTempo();
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
    }, 800000);
  }

  pararTempo(){
    this.interval$.unsubscribe();
    this.counter = 0;
  }

  resetContador(){
    this.pararTempo();
    this.counter=80;
    this.comecarTempo();
  }

  resetQuiz(){
    this.resetContador();
    this.listar();
    this.pontos =0;
    this.counter=80;
    this.contador=0;
    this.progesso="0";
  }

  getProgresso(){
    this.progesso = (((this.contador+1)/14)*100).toString();
    return this.progesso;

  }

  salvar(){
    this.jogador.pontos = this.pontos;
    return this.jogadorService.salvar(this.jogador).subscribe((res) => {
      console.log(res)
    }, error => console.log(error)
    )
 }


}
