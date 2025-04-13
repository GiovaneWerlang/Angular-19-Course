import { CanMatchFn, RedirectCommand, Route, Router, Routes, UrlSegment } from "@angular/router";
import { routes as userRoutes } from "./users/users.routes";
import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { resolveTitle, resolveUserName, UserTasksComponent } from "./users/user-tasks/user-tasks.component";
import { NotFoundComponent } from './not-found/not-found.component';
import { inject } from "@angular/core";

const dummyCanMath: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
    const router = inject(Router);
    const shouldGetAcess = Math.random();
    if(shouldGetAcess < 1){
        return true;
    }
    return new RedirectCommand(router.parseUrl('/unauthorized'));
}

export const routes: Routes = [
    {
        path: '',
        component: NoTaskComponent,
        title: 'No task selected'
    },
    {
        path: 'users/:userId',
        component: UserTasksComponent,
        children: userRoutes,
        canMatch: [dummyCanMath],
        resolve: {
            userName: resolveUserName
        },
        title: resolveTitle
    },
    {
        path: '**',
        component: NotFoundComponent
    }
]