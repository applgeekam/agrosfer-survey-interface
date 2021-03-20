import { Injectable } from '@angular/core';
import {SurveyModels} from '../models/survey.models';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  surveys: SurveyModels[] = [];
  surveysSubject = new Subject<SurveyModels[]>();

  constructor() { }

  emitSurveys(): any {
    this.surveysSubject.next(this.surveys);
  }

}
