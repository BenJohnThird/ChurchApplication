import { FormGroup, NgForm } from '@angular/forms';

export function touchForm(form: NgForm): void {
  for (const field in form.form.controls) {
    markAsTouched(field, form.form.controls);
  }
}

function markAsTouched(field: string, controls: any): void {
  const control = controls[field] as FormGroup;
  control.markAsTouched();

  if (control.controls) {
    for (const subField in control.controls) {
      markAsTouched(subField, control.controls);
    }
  }
}

export function touchFormGroup(form: FormGroup): void {
  for (const field in form.controls) {
    markAsTouched(field, form.controls);
  }
}
