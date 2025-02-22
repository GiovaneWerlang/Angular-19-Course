import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

type User = { id: string, name: string, avatar: string };

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {

  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter();

  get pathImage() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectedUser() {
    this.select.emit(this.user.id);
  }
}
