import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';


@Component({
    templateUrl: './not-found.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class ZMNotFoundComponent {}
