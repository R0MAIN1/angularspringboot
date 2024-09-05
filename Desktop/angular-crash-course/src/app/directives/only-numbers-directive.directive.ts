import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appOnlyNumbersDirective]'
})
export class OnlyNumbersDirectiveDirective {
  private nativeElement: any;

  constructor() { }


  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const allowedKeys = [
      'Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Delete', 'Enter', 'Escape'
    ];

    if (allowedKeys.includes(event.key) ||
      (event.ctrlKey || event.metaKey)) {
      return; // Autoriser les touches spéciales et les combinaisons Ctrl/Cmd
    }

    const regex = /^[0-9]$/;
    if (!regex.test(event.key)) {
      event.preventDefault(); // Empêcher la saisie de tout autre caractère
    }
  }

  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent) {
    const clipboardData = event.clipboardData;
    const pastedText = clipboardData?.getData('text') || '';

    if (!/^[0-9]+$/.test(pastedText)) {
      event.preventDefault(); // Empêcher le collage de texte non numérique
    }
  }

  @HostListener('input', ['$event'])
  onInputChange(event: Event) {
    const input = this.nativeElement as HTMLInputElement;
    const sanitizedValue = input.value.replace(/[^0-9]/g, '');
    if (input.value !== sanitizedValue) {
      input.value = sanitizedValue; // Remplace la valeur par une version filtrée
    }
  }

}
