import { Component, signal } from '@angular/core';


interface ITodo {
  id: number,
  task: string,
  isCompelet: boolean
}

@Component({
  selector: 'app-todo-app',
  imports: [],
  templateUrl: './todo-app.html',
  styleUrl: './todo-app.css',
})

export class TodoApp {
  todo = signal<ITodo[]>([]);
  taskId: number = 0;
  updateTask  = null; 

  add(task: string) {
    this.taskId++;
    this.todo.update(prev => ([...prev, { id: this.taskId, task: task, isCompelet: false }]));
  }

  compeleteTask(id : number) {
    this.todo.update(todos =>
      todos.map(task => task.id === Number(id) ? { ...task, isCompelet: !task.isCompelet } : task
      )
    )
  }

  deleteTask(id : number){
    this.todo.update(todos =>
      todos.filter(taks =>( taks.id !== id))
    )
  }





}
