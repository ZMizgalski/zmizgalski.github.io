import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ExperienceModel } from '../../models/welcome.types';

import { NavLinkSection } from '@core/utils';

import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroCheckCircleSolid, heroWrenchScrewdriverSolid } from '@ng-icons/heroicons/solid';


@Component({
    selector: 'zm-experience',
    templateUrl: './experience.component.html',
    imports: [ NgIcon ],
    providers: [ provideIcons({ heroWrenchScrewdriverSolid, heroCheckCircleSolid }) ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    host: {
        id: NavLinkSection.EXPERIENCE
    }
})
export class ZMExperienceComponent {
    public readonly experiences: ExperienceModel[] = [
        {
            year: 'Apr 2025 - Present',
            header: 'Software Developer',
            description: 'As a full-stack engineer embedded in a global company\'s product team, I owned the data import area end to end, from shaping requirements with the product owner to production support. I shipped the first release in two weeks, made data migration self-serve for customers, and rebuilt an unreliable Python processing service so failed jobs dropped to almost none. I also led the move to Material 3 theming and mentored four engineers along the way.'
        },
        {
            year: 'May 2023 - Apr 2025',
            header: 'Lead Software Architect & Full-Stack Developer | DevOps & Security | UI/UX Designer',
            description: 'As the founding engineer of an early-stage startup, I built an affiliate marketing platform from scratch with Angular and Node.js and owned everything technical, from architecture and CI/CD to production support. I launched English and Polish versions with region-specific SEO, which grew organic search traffic by 30%, made pages load 35% faster, halved hosting costs and secured the platform against OWASP ASVS, with no security incidents since launch.'
        },
        {
            year: 'Jun 2022 - May 2023',
            header: 'Junior Angular Developer',
            description: 'In my first role as a frontend developer, I built reusable components for large-scale Angular applications in TypeScript and RxJS, following and helping maintain the team\'s shared UI standards. I wrote tests for the features. Used error monitoring tools to track down and fix problems users hit in production.'
        },
        {
            year: 'Jul 2020 - Aug 2020',
            header: 'Intern Angular Developer',
            description: 'During my internship as a frontend developer, I built an alert system and tree-select components in Angular, wrote tests for them, and followed the team\'s UI standards to keep them consistent with the rest of the app.'
        }
    ];
}
