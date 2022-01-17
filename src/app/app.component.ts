import { API_BASE_URL } from './../environments/token-def';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng13';
  baseUrl = '';

  constructor( @Inject(API_BASE_URL) baseUrl: string) {
    this.baseUrl = baseUrl;
  }
}
