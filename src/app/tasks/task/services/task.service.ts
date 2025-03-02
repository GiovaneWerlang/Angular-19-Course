import { Injectable } from '@angular/core';
import { DUMMY_TASKS } from '../../../dummy-tasks';
import { NewTaskData } from '../models/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {

    private tasks = DUMMY_TASKS;
    private LOCALSTORAGE_PATH:string = 'tasks';
    constructor() {
        const tasks = localStorage.getItem(this.LOCALSTORAGE_PATH);
        if(tasks){
            this.tasks = JSON.parse(tasks);
        }
     }

    getUserTasks(userId: string) {
        return this.tasks.filter((task) => task.userId === userId);
    }

    addTask(taskData: NewTaskData, userId: string) {
        this.tasks.push({
            id: new Date().getTime().toString(),
            userId: userId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.date
        });
        this.saveTasks();
    }

    removeTask(taskId: string){
        this.tasks = this.tasks.filter((task) => task.id !== taskId);
        this.saveTasks();
    }

    private saveTasks(){
        localStorage.setItem(this.LOCALSTORAGE_PATH, JSON.stringify(this.tasks));
    }

}