import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './models/user.model';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {

  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter();

  get pathImage() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectedUser() {
    this.select.emit(this.user.id);
  }
}
