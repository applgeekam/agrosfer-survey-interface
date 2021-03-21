import {Component, OnDestroy, OnInit} from '@angular/core';
import {SurveyModels} from '../../models/survey.models';
import {SurveyService} from '../../service/survey.service';
import { map} from 'rxjs/operators';
import { SurveyListItems } from '../../models/placeholder';

@Component({
  selector: 'app-servey-list',
  templateUrl: './servey-list.component.html',
  styleUrls: ['./servey-list.component.css']
})
export class SurveyListComponent implements OnInit, OnDestroy {

  surveys: SurveyModels[] = [];
  surveysSubscription: any;
  searched = '';
  onSearchLoading = false;

  constructor(private surveyService: SurveyService) { }

  ngOnInit(): void {
    this.surveysSubscription = this.surveyService.surveysSubject
      .pipe(map((data) => {
        return data.filter(survey => {
          if (this.searched !== '')
          {
            this.onSearchLoading = true;
            return survey.name.toLowerCase().includes(this.searched.toLocaleLowerCase());
          }
          this.onSearchLoading = false;
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
  refresh(): void {
    this.surveyService.emitSurveys();
  }
}
