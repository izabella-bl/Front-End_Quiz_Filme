import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questoes',
  templateUrl: './questoes.component.html',
  styleUrls: ['./questoes.component.css']
})
export class QuestoesComponent implements OnInit {

  public nome:string ="";
  constructor() { }

  ngOnInit(): void {
    this.nome = localStorage.getItem("nome")!;
  }

}
