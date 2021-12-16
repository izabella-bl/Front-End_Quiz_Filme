import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuestoesComponent } from './questoes/questoes.component';
import { RankComponent } from './rank/rank.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuizComponent,
    QuestoesComponent,
    RankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
