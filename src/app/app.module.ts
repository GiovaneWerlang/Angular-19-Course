import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { UserComponent } from './user/user.component';
import { CardComponent } from './shared/card/card.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './tasks/task/task.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';

@NgModule({
    imports: [BrowserModule, FormsModule, SharedModule],
    exports: [],
    declarations: [AppComponent, HeaderComponent, UserComponent, TasksComponent, TaskComponent, NewTaskComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
