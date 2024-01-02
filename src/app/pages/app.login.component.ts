import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { touchForm } from '../utils/touch-form';

@Component({
  selector: 'app-login',
  templateUrl: './app.login.component.html',
})
export class AppLoginComponent {

  @ViewChild(NgForm)
  public form: NgForm;

  public dark: boolean;

  public checked: boolean;

  constructor() {
  }

  public login(): void {
    touchForm(this.form);
    if (this.form.invalid) {
      return;
    }
  }

}
