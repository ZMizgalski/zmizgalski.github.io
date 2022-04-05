import { LoaderService } from './loader/loader-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-main-nav></app-main-nav>`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private loaderService: LoaderService) {
    this.loaderService.show();
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.loaderService.hide();
    }, 1000);
  }
}
