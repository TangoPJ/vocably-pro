import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Answer } from '../card/card.component';
import { Subject } from 'rxjs';
import { CardItem } from '@vocably/model';
import { SrsScore } from '@vocably/srs';

const gradeMap: Record<Answer, SrsScore> = {
  weak: 0,
  somewhat: 3,
  strong: 5,
};

export type GradeResult = {
  cardItem: CardItem;
  score: SrsScore;
};

@Component({
  selector: 'vocably-srs-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [
    trigger('displayComponent', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.95)' }),
        animate('300ms', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
    ]),
  ],
})
export class ListComponent {
  @Input() cards!: CardItem[];
  @Output() grade = new EventEmitter<GradeResult>();

  flip$ = new Subject();
  answer$ = new Subject<Answer>();

  onAnswer(answer: Answer) {
    this.grade.emit({
      cardItem: this.cards[0],
      score: gradeMap[answer],
    });
    this.cards = this.cards.slice(1);
  }
}
