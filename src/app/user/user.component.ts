import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {

  @Input({required: true}) avatar!:string;
  @Input({required: true}) name!:string;

  get pathImage(){
    return 'assets/users/' + this.avatar;
  }
 
  onSelectedUser(){

  }
}
