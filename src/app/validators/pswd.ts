import { AbstractControl, ValidationErrors } from '@angular/forms';

export function passwordValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.value;

  const hasNumber = /\d/.test(password); // Verifica si tiene un número
  const hasUppercase = /[A-Z]/.test(password); // Verifica si tiene una mayúscula
  const hasMinLength = password && password.length >= 5; // Verifica que tenga al menos 5 caracteres

  if (!hasNumber || !hasUppercase || !hasMinLength) {
    return {
      passwordStrength: 'La contraseña debe contener al menos un número, una letra mayúscula y tener un mínimo de 5 caracteres.',
    };
  }

  return null;
}
