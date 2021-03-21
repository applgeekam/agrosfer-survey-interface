import {Component, Input, OnInit} from '@angular/core';
import {SurveyModels} from '../../models/survey.models';

@Component({
  selector: 'app-survey-list-item',
  templateUrl: './survey-list-item.component.html',
  styleUrls: ['./survey-list-item.component.css']
})
export class SurveyListItemComponent implements OnInit {

  @Input() item: SurveyModels = new SurveyModels('', '');
  constructor() { }

  ngOnInit(): void {
  }
  formatInDate(text: string | Date): Date {
    return new Date(text);
  }

}
