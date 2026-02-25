import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './components/test-component/test-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TestComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-first-app');

  parentMessage: string = "parent component is saying 'hi ♥' to its children";

  messageFromChildren: string = '(no messages from children have been received yet...)';

  receiveDataFromChild(data: string) {
    this.messageFromChildren = data
      ? data
      : '(no messages from children have been received yet...)';
  }
}
