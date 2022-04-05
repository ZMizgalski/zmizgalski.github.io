import { Component } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent {
  isLoading = true;

  constructor() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }
}
