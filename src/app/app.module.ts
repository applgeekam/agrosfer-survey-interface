import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SurveyComponent } from './views/survey/survey.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { SurveyListComponent } from './components/survey-list/servey-list.component';
import { ServeyToolBoxComponent } from './components/survey-tool-box/servey-tool-box.component';
import { SurveyBuilderComponent } from './components/survey-builder/servey-builder.component';
import { QuizComponent } from './components/quiz/quiz.component';
import {SurveyService} from './service/survey.service';
import {QuizService} from './service/quiz.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SurveyListItemComponent } from './components/survey-list-item/survey-list-item.component';


@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    NavbarComponent,
    HeaderComponent,
    SurveyListComponent,
    ServeyToolBoxComponent,
    SurveyBuilderComponent,
    QuizComponent,
    SurveyListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    SurveyService,
    QuizService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
