import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestoesComponent } from './questoes/questoes.component';
import { QuizComponent } from './quiz/quiz.component';
import { RankComponent } from './rank/rank.component';


const routes: Routes = [
  {path:'',redirectTo:'quiz',pathMatch:"full"},
  {path:"quiz",component:QuizComponent},
  {path:"questoes",component:QuestoesComponent},
  {path:"rank",component:RankComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
