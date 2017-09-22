import { Directive, OnChanges, Input, SimpleChanges, forwardRef } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS, ValidatorFn, ValidationErrors, Validators } from '@angular/forms';

@Directive({
  selector: '[upperCase]',
  providers: [{provide: NG_VALIDATORS, useExisting: UpperCaseValidatorDirective, multi: true}]
})
export class UpperCaseValidatorDirective implements Validator {
  validate(control: AbstractControl): {[key: string]: any} {
    const valor = control.value;
    if (valor) {
      return valor !== valor.toUpperCase() ? {'upperCase': {valor}} : null;
    } else {
      return null;
    }
  }
}

export const MIN_LENGTH_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinValidatorDirective),
  multi: true
};

@Directive({
  selector: '[min][formControlName],[min][formControl],[min][ngModel]',
  providers: [MIN_LENGTH_VALIDATOR],
  host: {'[attr.min]': 'min ? min : null'}
})
export class MinValidatorDirective implements Validator,
    OnChanges {
  private _validator: ValidatorFn;
  private _onChange: () => void;

  @Input() min: string;

  ngOnChanges(changes: SimpleChanges): void {
    if ('min' in changes) {
      this._createValidator();
      if (this._onChange) this._onChange();
    }
  }

  validate(c: AbstractControl): ValidationErrors|null {
    return this.min == null ? null : this._validator(c);
  }

  registerOnValidatorChange(fn: () => void): void { this._onChange = fn; }

  private _createValidator(): void {
    this._validator = Validators.min(parseInt(this.min, 10));
  }
}

export const VALIDACIONES_PERSONALIZADA = [UpperCaseValidatorDirective, MinValidatorDirective];
