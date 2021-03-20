import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SurveyComponent } from './views/survey/survey.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { ServeyListComponent } from './components/servey-list/servey-list.component';
import { ServeyToolBoxComponent } from './components/servey-tool-box/servey-tool-box.component';
import { ServeyBuilderComponent } from './components/servey-builder/servey-builder.component';
import { QuizComponent } from './components/quiz/quiz.component';
import {ServeyService} from './service/servey.service';
import {QuizService} from './service/quiz.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    NavbarComponent,
    HeaderComponent,
    ServeyListComponent,
    ServeyToolBoxComponent,
    ServeyBuilderComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    ServeyService,
    QuizService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
