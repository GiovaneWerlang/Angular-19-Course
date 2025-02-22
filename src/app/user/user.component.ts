import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';
import { GenerateRandomIndex } from '../shared/utils/randomindex';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {
  //Angular detects the changes to the signal and what is being computed to re-render the component.
  selectedUser = signal(DUMMY_USERS[GenerateRandomIndex(DUMMY_USERS?.length ?? 0)]);
  pathImage = computed(() => 'assets/users/' + this.selectedUser().avatar);

  onSelectedUser(){
    this.selectedUser.set(DUMMY_USERS[GenerateRandomIndex(DUMMY_USERS?.length ?? 0)]);
  }
}
