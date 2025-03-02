import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { UserComponent } from './user/user.component';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
    imports: [BrowserModule, SharedModule, TasksModule],
    exports: [],
    declarations: [AppComponent, HeaderComponent, UserComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
