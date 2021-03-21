import { Injectable } from '@angular/core';
import {SurveyModels} from '../models/survey.models';
import {Subject} from 'rxjs';
import {SurveyListItems} from '../models/placeholder';


@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  surveys: SurveyModels[] = SurveyListItems;
  surveysSubject = new Subject<SurveyModels[]>();

  constructor() { }

  emitSurveys(): any {
    this.surveysSubject.next(this.surveys.slice());
  }

}
