import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {QuizModels} from '../models/quiz.models';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  quiz: QuizModels[] = [new QuizModels(1, 'Quiz 1', '')];
  quizSubject = new Subject<QuizModels[]>();

  constructor() { }

  emitQuiz(): any {
    this.quizSubject.next(this.quiz);
  }

  addQuiz(quiz: QuizModels): void {
    this.quiz.push(quiz);
    this.emitQuiz();
  }

  removeQuiz(id: number): void {
    this.quiz.slice(id, 1);
    this.emitQuiz();
  }

}
