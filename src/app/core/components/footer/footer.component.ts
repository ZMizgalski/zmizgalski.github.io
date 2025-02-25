import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { NgIcon } from '@ng-icons/core';
import { simpleGithub, simpleLinkedin, simpleSpigotmc } from '@ng-icons/simple-icons';


@Component({
    selector: 'zm-footer',
    templateUrl: './footer.component.html',
    imports: [ NgIcon ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class ZMFooterComponent {
    public readonly socials = [
        {
            icon: simpleLinkedin,
            link: 'https://www.linkedin.com/in/zbigniew-mizgalski-951863236'
        },
        {
            icon: simpleGithub,
            link: 'https://github.com/ZMizgalski'
        },
        {
            icon: simpleSpigotmc,
            link: 'https://www.spigotmc.org/members/zibi.667650'
        }
    ];
}
