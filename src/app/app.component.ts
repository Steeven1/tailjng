import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JButtonComponent } from './tailjng/button/button.component';
import { JThemeGeneratorComponent } from './tailjng/theme-generator/theme-generator.component';
import { JInputComponent } from './tailjng/input/input/input.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
   
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tailjng-test';
}
