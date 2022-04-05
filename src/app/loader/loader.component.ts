import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
  private localHide = false;
  @Output() showChange: EventEmitter<any> = new EventEmitter();

  @Input() get show(): boolean {
    return this.localHide;
  }

  public set show(value: boolean) {
    this.localHide = value;
  }
}
