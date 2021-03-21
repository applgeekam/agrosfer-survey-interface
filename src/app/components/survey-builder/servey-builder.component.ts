import {Component, OnDestroy, OnInit} from '@angular/core';
import {QuizModels} from '../../models/quiz.models';
import {QuizService} from '../../service/quiz.service';
import {SurveyModels} from '../../models/survey.models';

@Component({
  selector: 'app-servey-builder',
  templateUrl: './servey-builder.component.html',
  styleUrls: ['./servey-builder.component.css']
})
export class SurveyBuilderComponent implements OnInit, OnDestroy {
  quiz: QuizModels[] = [];
  quizSubscription: any;

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.quizSubscription = this.quizService.quizSubject.subscribe((quiz: QuizModels[]) => {
      this.quiz = quiz;
    });
    this.quizService.emitQuiz();
  }

  ngOnDestroy(): void {
    this.quizSubscription.unsubscribe();
  }
}
