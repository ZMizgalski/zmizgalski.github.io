import { animate, style, transition, trigger } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal, ViewEncapsulation } from '@angular/core';

import { NAV_LINKS } from '@core/utils';

import { ZMThemeControllerComponent } from '@shared/components/theme-controller';
import { scrollIntoView } from '@shared/utils';

import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroArrowRight, heroBars2, heroXMark } from '@ng-icons/heroicons/outline';


const NavAnimation = trigger('scaleIn', [
    transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.9)' }),
        animate('.1s ease-in', style({ opacity: 1, transform: 'scale(1)' }))
    ]),
    transition(':leave', [
        style({ opacity: 1, transform: 'scale(1)' }),
        animate('.1s ease-in', style({ opacity: 0, transform: 'scale(0.9)' }))
    ])
]);

const NavOverlayAnimation = trigger('fadeIn', [
    transition(':enter', [
        style({ opacity: 0 }),
        animate('.1s ease-in', style({ opacity: 1 }))
    ]),
    transition(':leave', [
        style({ opacity: 1 }),
        animate('.1s ease-in', style({ opacity: 0 }))
    ])
]);

@Component({
    selector: 'zm-nav',
    templateUrl: './nav.component.html',
    imports: [ NgIcon, ZMThemeControllerComponent ],
    providers: [ provideIcons({ heroArrowRight, heroBars2, heroXMark }) ],
    animations: [ NavAnimation, NavOverlayAnimation ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class ZMNavComponent {
    public readonly navOpened = signal(false);

    public readonly links = inject(NAV_LINKS, { optional: true });

    public readonly scrollIntoView = scrollIntoView(inject(DOCUMENT));

    public toggle(): void {
        this.navOpened.update(state => !state);
    }
}
