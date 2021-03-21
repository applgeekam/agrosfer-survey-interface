import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {QuizModels} from '../../models/quiz.models';
import {QuizService} from '../../service/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  @Input() item: QuizModels = new QuizModels(0, '', '');
  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
  }
  addQuiz(): void {
    this.quizService.addQuiz('');
  }
  removeQuiz(): void {
    if (this.canDelete()){
      this.quizService.removeQuiz(this.item);
    }
  }
  canDelete(): boolean {
    return this.quizService.getSize() > 1 ;
  }

}
