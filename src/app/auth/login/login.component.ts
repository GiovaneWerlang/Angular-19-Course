import { afterNextRender, Component, DestroyRef, inject, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [ FormsModule ]
})
export class LoginComponent {

  private form = viewChild<NgForm>('form');
  private destroyRef = inject(DestroyRef);

  constructor(){
    afterNextRender(() => {
      const savedForm = window.localStorage.getItem('login-email');
      if(savedForm){
        const formData = JSON.parse(savedForm);
        setTimeout(() => {
          this.form()?.controls['email'].setValue(formData.email);
        }, 1);
      }

      const subscription = this.form()?.valueChanges?.pipe(debounceTime(500))
      .subscribe({
        next: (value) => window.localStorage.setItem('login-email', JSON.stringify({ email: value.email}))
      });
      this.destroyRef.onDestroy(() => subscription?.unsubscribe());
    });
  }

  onSubmit(formData: NgForm) {
    if(formData.form.invalid){
      return;
    }
    const email = formData.form.value.email;
    const password = formData.form.value.password;
    console.log(email, password)

    formData.form.reset();
  }

}
