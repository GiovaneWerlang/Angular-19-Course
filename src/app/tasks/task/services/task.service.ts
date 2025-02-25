import { Injectable } from '@angular/core';
import { DUMMY_TASKS } from '../../../dummy-tasks';
import { NewTaskData } from '../models/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {

    private tasks = DUMMY_TASKS;
    constructor() { }

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
    }

    removeTask(taskId: string){
        this.tasks = this.tasks.filter((task) => task.id !== taskId);
    }

}