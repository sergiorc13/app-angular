import { AbstractControl, ValidationErrors } from "@angular/forms";

export function emailValidator(control: AbstractControl): ValidationErrors | null {
  const email = control.value;
  if (email && !email.includes('@')) {
    return { emailFormat: 'El correo electrónico debe contener un @.' };
  }
  return null;
}
