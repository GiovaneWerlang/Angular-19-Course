import { Component, computed, inject, input } from '@angular/core';
import { UsersService } from '../users.service';
import { ResolveFn, RouterLink, RouterOutlet, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [RouterOutlet, RouterLink]
})
export class UserTasksComponent {
  userName = input.required<string>();
  // userId = input.required<string>();
  // private usersService = inject(UsersService);

  // userName = computed(() => this.usersService.users.find(u => u.id === this.userId())?.name);
}

export const resolveUserName: ResolveFn<string> = (route:ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const usersService = inject(UsersService);
  const userName = usersService.users.find(u => u.id === route.paramMap.get('userId'))?.name || '';
  return userName;
}