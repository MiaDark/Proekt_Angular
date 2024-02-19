import { Component, OnInit } from '@angular/core';
import { QuestionComponent } from '../question/question.component';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [QuestionComponent, NgFor],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent implements OnInit{
  questions = [
    { id: 1, text: 'What is Angular?', options: ['A JavaScript library', 'A TypeScript framework', 'A Python framework'], correct: 1 },
    { id: 2, text: 'What does CLI stand for?', options: ['Command Line Interface', 'Common Language Infrastructure', 'Component Level Integration'], correct: 0 },
    { id: 3, text: 'What is the capital of France?', options: ['Berlin', 'Madrid', 'Paris'], correct: 2 },
    { id: 4, text: 'Which planet is known as the Red Planet?', options: ['Mars', 'Jupiter', 'Venus'], correct: 0 },
    { id: 5, text: 'Who wrote "Romeo and Juliet"?', options: ['Charles Dickens', 'William Shakespeare', 'Jane Austen'], correct: 1 }
  ];

  score = 0;

  ngOnInit() {
  }
  onOptionSelected(optionIndex: number, questionIndex: number) {
    const selectedOption = this.questions[questionIndex].options[optionIndex];

    // Проверка дали е точен одговорот
    if (selectedOption === this.questions[questionIndex].options[this.questions[questionIndex].correct]) {
      this.score++;
    }
  }

  submitQuiz() {//Колку поени се освоени.
    alert(`Your score is: ${this.score}/${this.questions.length}`);
  }
}
