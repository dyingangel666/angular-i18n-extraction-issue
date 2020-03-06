import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'i18nextractiontest';
  placeholdertext = $localize `:@@notWorking:original 1`;
}
