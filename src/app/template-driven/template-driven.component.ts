import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-driven.component.html',
})
export class TemplateDrivenComponent {
  options = ['Option 1', 'Option 2', 'Option 3'];

  onSubmit(form: any) {
    console.log('Form Submitted!', form.value);
    form.reset();
  }
}
