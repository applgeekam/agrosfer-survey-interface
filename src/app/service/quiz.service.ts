import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {QuizModels} from '../models/quiz.models';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  all: QuizModels[] = [new QuizModels(0, 'Quiz', '')];
  quizSubject = new Subject<QuizModels[]>();

  constructor() { }

  emitQuiz(): any {
    this.quizSubject.next(this.all.slice());
  }

  addQuiz(content: string): void {
    const id = this.all[this.all.length - 1].id + 1;
    const quiz = new QuizModels(id, 'Quiz ' + id, content);
    this.all.push(quiz);
    this.emitQuiz();
  }

  removeQuiz(quiz: QuizModels): void {
    const quizToRemove = this.all.findIndex((item: QuizModels) => {
      return item === quiz;
    });
    this.all.splice(quizToRemove, 1);
    this.emitQuiz();
  }

  getSize(): number {
    return this.all.length;
  }

}
