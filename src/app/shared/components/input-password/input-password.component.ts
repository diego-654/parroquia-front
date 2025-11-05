import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  forwardRef,
  Host,
  input,
  Optional,
  output,
  signal,
  SimpleChanges,
  SkipSelf,
  ViewChild,
} from '@angular/core';
import {
  ControlContainer,
  FormControl,
  FormsModule,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { validatorsErrors } from '@core/validators/validator-errors';

@Component({
  selector: 'app-input-password',
  imports: [CommonModule, FormsModule, SvgIconComponent],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputPasswordComponent),
      multi: true,
    },
  ],
  templateUrl: './input-password.component.html',
  styleUrl: './input-password.component.scss',
})
export class InputPasswordComponent {
  @ViewChild('inputElement') inputElement!: ElementRef<HTMLInputElement>;

  label = input<string>();
  value = input<string>();
  placeholder = input<string>('');
  formControlName = input<string | null>(null);
  formControl = input<FormControl<string> | null>(null);
  errors = input<{ [key: string]: string }>({});
  disabled = signal<boolean>(false);
  name = input<string>('');
  readonly = input<boolean>(false);
  autofocus = input<boolean>(false);
  size = input<'small' | 'medium' | 'large'>('medium');

  formGroupErrors = input<{ [key: string]: string }>({});
  maxLength = input<number>();
  internalValue = signal<string>('');
  showPassword = signal<boolean>(true);

  //** Outputs */
  blur = output<void>();
  valueChange = output<string>();
  debounceChange = output<void>();

  private debounceTimer?: ReturnType<typeof setTimeout>;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['value']) {
      const newValue = changes['value'].currentValue;

      if (newValue != this.internalValue()) {
        this.internalValue.set(newValue);
      }
    }
  }

  ngOnDestroy() {
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
    }
  }

  ngAfterViewInit() {
    if (this.autofocus()) {
      setTimeout(() => this.inputElement.nativeElement.focus(), 0);
    }
  }

  constructor(
    @Optional() @Host() @SkipSelf() private controlContainer: ControlContainer
  ) {}

  // Function to call when the value changes
  onChange: Function = () => {};

  // Function to call when the input is touched
  onTouched: Function = () => {};

  get control(): FormControl<string> {
    if (this.formControl()) {
      return this.formControl()!;
    }

    if (this.formControlName()) {
      return this.controlContainer?.control?.get(
        this.formControlName()!
      ) as FormControl<string>;
    }

    return this.controlContainer?.control as FormControl<string>;
  }

  writeValue(value: string): void {
    //se ejecuta cada vez que se hace setea o se hace patch en el form
    this.internalValue.set(value);
  }

  registerOnChange(fn: Function): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: Function): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  handleInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = input.value;

    this.emitirCambios(value);

    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
    }

    this.debounceTimer = setTimeout(() => {
      this.debounceChange.emit();
    }, 500);
  }

  emitirCambios(valueText: string) {
    this.internalValue.set(valueText);
    this.onChange(valueText);
    this.valueChange.emit(valueText);
  }

  keyPressed(event: KeyboardEvent) {
    // esto es para permitir el ctrl+c y el ctrl+v
    if (event.ctrlKey || event.metaKey) {
      return;
    }
  }

  handleBlur(): void {
    if (this.readonly() || this.disabled()) return;

    this.onTouched();

    this.blur.emit();
  }

  get isRequired(): boolean {
    return this.control?.hasValidator(Validators.required) ?? false;
  }

  handleWrapperClick() {
    if (this.readonly() || this.disabled()) return;

    this.inputElement.nativeElement.focus();
  }

  public focus() {
    if (this.inputElement) {
      const nativeInput = this.inputElement.nativeElement;
      nativeInput.focus();
      nativeInput.select(); // Selecciona todo el texto
    }
  }

  get innerErrors(): { [key: string]: string } {
    return { ...validatorsErrors(this.control), ...this.errors() };
  }

  get errorMessage(): string | null {
    const control = this.control;
    const parentForm = this.controlContainer?.control;
    if (control && control.touched && control.errors) {
      for (const errorKey of Object.keys(control.errors)) {
        if (this.innerErrors[errorKey]) {
          return this.innerErrors[errorKey];
        }
      }
    }
        if (parentForm && parentForm.errors && parentForm.touched) {
      const parentErrorKey = Object.keys(parentForm.errors)[0];
      if (this.formGroupErrors()[parentErrorKey]) {
        return this.formGroupErrors()[parentErrorKey];
      }
    }
    return null;
  }

  togglePasswordVisibility() {
    this.showPassword.set(!this.showPassword());
  }
}
