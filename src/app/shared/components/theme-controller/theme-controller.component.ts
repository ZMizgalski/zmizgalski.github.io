import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroMoon, heroSun } from '@ng-icons/heroicons/outline';


@Component({
    selector: 'zm-theme-controller',
    template: `
        <label class="toggle text-base-content">
            <input type="checkbox" value="synthwave" class="theme-controller">

            <ng-icon
                color="var(--color-base-100)"
                class="!h-full !w-full"
                name="heroSun"
            />

            <ng-icon
                color="var(--color-base-100)"
                class="!h-full !w-full"
                name="heroMoon"
            />
        </label>
    `,
    imports: [ NgIcon ],
    providers: [ provideIcons({ heroSun, heroMoon }) ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class ZMThemeControllerComponent {}
