import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {

  @Input({required: true}) id!:string;
  @Input({required: true}) avatar!:string;
  @Input({required: true}) name!:string;
  @Output() select = new EventEmitter();

  get pathImage(){
    return 'assets/users/' + this.avatar;
  }
 
  onSelectedUser(){
    this.select.emit(this.id);
  }
}
