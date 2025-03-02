import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { TasksComponent } from './tasks.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskComponent } from './task/task.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [CommonModule, FormsModule, SharedModule],
    exports: [TasksComponent],
    declarations: [TasksComponent, TaskComponent, NewTaskComponent],
    providers: [],
})
export class TasksModule { }
