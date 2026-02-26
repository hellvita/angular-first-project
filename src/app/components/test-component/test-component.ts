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

  myName: string = 'helvita';

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

  get buttonClasses() {
    const base = 'p-4 rounded-2xl bg-blue-900';
    const interaction =
      'hover:bg-blue-500 hover:text-gray-900 transition-colors duration-300 cursor-pointer';

    return this.isEnabled ? `${base} ${interaction}` : base;
  }
}
