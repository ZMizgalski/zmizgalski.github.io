import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ZMFooterComponent } from '@core/components/footer';
import { ZMNavComponent } from '@core/components/nav';


@Component({
    templateUrl: './dashboard.component.html',
    imports: [ RouterOutlet, ZMFooterComponent, ZMNavComponent ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class ZMDashboardComponent {}
