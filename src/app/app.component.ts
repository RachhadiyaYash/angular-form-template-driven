import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { TemplateDriven2Component } from './template-driven-2/template-driven-2.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TemplateDrivenComponent,
    TemplateDriven2Component,
    HttpClientModule,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular_forms';
}
