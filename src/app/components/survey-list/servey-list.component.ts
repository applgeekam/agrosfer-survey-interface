import {Component, OnDestroy, OnInit} from '@angular/core';
import {SurveyModels} from '../../models/survey.models';
import {SurveyService} from '../../service/survey.service';
import { map} from 'rxjs/operators';

@Component({
  selector: 'app-servey-list',
  templateUrl: './servey-list.component.html',
  styleUrls: ['./servey-list.component.css']
})
export class SurveyListComponent implements OnInit, OnDestroy {

  surveys: SurveyModels[] = [];
  surveysSubscription: any;
  searched = '';

  constructor(private surveyService: SurveyService) { }

  ngOnInit(): void {
    this.surveysSubscription = this.surveyService.surveysSubject
      .pipe(map((datas) => {
        return datas.filter(survey => {
          if (this.searched !== '')
          {
            return survey.name.toLowerCase().includes(this.searched.toLocaleLowerCase());
          }
          return true;
        });
      })
      )
      .subscribe(
      (surveys: SurveyModels[]) => {
        this.surveys = surveys;
      }
    );
    this.surveyService.emitSurveys();
  }

  ngOnDestroy(): void {
    this.surveysSubscription.unsubscribe();
  }


}
