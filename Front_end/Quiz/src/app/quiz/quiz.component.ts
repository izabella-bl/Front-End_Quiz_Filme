import { Component, OnInit ,ViewChild,ElementRef} from '@angular/core';
import { Jogador } from '../model/jogador';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  @ViewChild('nome') nomeKey!:ElementRef
  
  jogador:Jogador = new Jogador;

  constructor( ) { }

  ngOnInit(): void {
  }

  comecar(){
    localStorage.setItem("nome",this.nomeKey.nativeElement.value);
  }

  

}
