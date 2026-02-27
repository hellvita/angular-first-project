import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Highlight } from '../../directives/highlight';
import { colors } from '../../constants/colors';

@Component({
  selector: 'app-test-component',
  imports: [CommonModule, FormsModule, Highlight],
  templateUrl: './test-component.html',
  styleUrl: './test-component.css',
})
export class TestComponent {
  @Input() messageFromParent: string = '(no messages from parent have been received yet...)';

  @Output() dataEmitter = new EventEmitter<string>();

  sendDataToParent() {
    this.dataEmitter.emit(this.message);
  }

  myName: string = 'Helvita';

  message: string = '';

  isEnabled: boolean = false;

  isHeartActive = false;

  separateWith(separator: string = '-', amount: number = 12): string {
    const result: string = separator.repeat(amount).trim();
    return result;
  }

  onHeartClick() {
    this.isHeartActive = !this.isHeartActive;
  }

  activeColor: string = colors.blue;
  isBlueHear: boolean = true;
  isPurpleHear: boolean = false;

  changeToBlue() {
    this.activeColor = colors.blue;
    this.isBlueHear = true;
    this.isPurpleHear = false;
  }

  changeToPurple() {
    this.activeColor = colors.purple;
    this.isBlueHear = false;
    this.isPurpleHear = true;
  }

  changeToYellow() {
    this.activeColor = colors.yellow;
    this.isBlueHear = false;
    this.isPurpleHear = false;
  }

  partsOfHelvitaMessage = ['hello', 'there!', 'ps:', 'from', 'helvita'];
  // partsOfHelvitaMessage = [];

  isWannaKnowDate: boolean = false;
  dateButtonText: string = 'show me!';
  today: Date = new Date();

  handleDataGuess() {
    this.isWannaKnowDate = !this.isWannaKnowDate;
    this.dateButtonText = this.isWannaKnowDate ? 'hide' : 'show me!';
  }

  veryLongNumber: number = 3.4599459003475654126541256622000148555;

  amountOfLove: number = 2.02;

  thingToClear: string = `gfffdetyru${this.myName}gjhkjljhgfytgc`;
  isClear: boolean = false;
  clearBtnText: string = 'clear';

  handleClear() {
    this.isClear = !this.isClear;
    this.clearBtnText = this.isClear ? 'put it back' : 'clear';
  }

  get buttonClasses() {
    const base = 'p-4 rounded-2xl bg-blue-900';
    const interaction =
      'hover:bg-blue-500 hover:text-gray-900 transition-colors duration-300 cursor-pointer';

    return this.isEnabled ? `${base} ${interaction}` : base;
  }
}
