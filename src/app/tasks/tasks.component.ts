import { Component, computed, DestroyRef, inject, input, OnInit } from '@angular/core';

import { TaskComponent } from './task/task.component';
import { Task } from './task/task.model';
import { TasksService } from './tasks.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, RouterLink],
})
export class TasksComponent implements OnInit{

  userId = input.required<string>();
  //order = input<'asc'|'desc'>();
  order?: 'asc' | 'desc';
  private tasksService = inject(TasksService);
  userTasks = computed(() => this.tasksService.allTasks().filter(task => task.userId === this.userId()))
  private destroyRef = inject(DestroyRef);
  private activatedRout = inject(ActivatedRoute);

  ngOnInit(): void {
    const subscription = this.activatedRout.queryParams.subscribe({
      next: params => this.order = params['order']
    })
    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }

}
