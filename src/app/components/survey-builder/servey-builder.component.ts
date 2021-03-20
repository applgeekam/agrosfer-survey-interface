import { Component, OnInit } from '@angular/core';
import {QuizModels} from '../../models/quiz.models';
import {QuizService} from '../../service/quiz.service';
import {SurveyModels} from '../../models/survey.models';

@Component({
  selector: 'app-servey-builder',
  templateUrl: './servey-builder.component.html',
  styleUrls: ['./servey-builder.component.css']
})
export class SurveyBuilderComponent implements OnInit {
  quiz: QuizModels[] = [];
  quizSubscription: any;

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.quizSubscription = this.quizService.quizSubject.subscribe((quiz: QuizModels[]) => {
      this.quiz = quiz;
    });
    this.quizService.emitQuiz();
  }

  addQuiz(): void {
    const id = this.quiz[this.quiz.length - 1].id + 1;
    const quiz = new QuizModels(id, 'Quiz ' + id, '');
    this.quizService.addQuiz(quiz);
  }

  removeQuiz(survey: SurveyModels): void {
    const quizToRemove = this.quiz.findIndex((item: QuizModels) => {
      return item === survey;
    });
    this.quizService.removeQuiz(quizToRemove);
  }
}
