import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './test-component.html',
  styleUrl: './test-component.css',
})
export class TestComponent {
  myName: string = 'helvita';

  userName: string = '';

  isEnabled: boolean = false;

  isHeartActive = false;

  separateWith(separator: string = '-', amount: number = 12): string {
    const result: string = separator.repeat(amount).trim();
    return result;
  }

  onHeartClick() {
    this.isHeartActive = !this.isHeartActive;
  }

  get buttonClasses() {
    const base = 'p-4 rounded-2xl bg-blue-900';
    const interaction =
      'hover:bg-blue-500 hover:text-gray-900 transition-colors duration-300 cursor-pointer';

    return this.isEnabled ? `${base} ${interaction}` : base;
  }
}
