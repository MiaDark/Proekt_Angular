import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [NgFor],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent implements OnInit {
  @Input() question: any;
  @Input() questionIndex!: number; // Add "!" to indicate it will be initialized

  @Output() optionSelected = new EventEmitter<{ optionIndex: number, questionIndex: number }>();

  selectedOption: number | null = null;

  ngOnInit() {
  }

  selectOption(optionIndex: number) {
    this.selectedOption = optionIndex;
    this.optionSelected.emit({ optionIndex, questionIndex: this.questionIndex });
  }
}