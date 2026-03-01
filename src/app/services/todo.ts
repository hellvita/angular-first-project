import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Todo {
  constructor() {}

  private todoList: string[] = [];

  private getLength(): number {
    return this.todoList.length;
  }

  getAllTasks(): string[] {
    return this.todoList;
  }

  getTaskById(id: number): string | null {
    if (id > this.getLength() - 1) return null;

    return this.todoList[id];
  }

  addTask(task: string) {
    this.todoList.push(task);
  }

  updateTaskById(id: number, payload: string): string | null {
    if (id > this.getLength() - 1) return null;

    this.todoList[id] = payload;

    return this.todoList[id];
  }

  deleteTaskById(id: number): string | null {
    if (id > this.getLength() - 1) return null;

    const deletedTask = this.todoList[id];

    this.todoList.splice(id, 1);

    return deletedTask;
  }

  deleteAllTasks() {
    this.todoList = [];
  }
}
