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
            year: 'May 2023 - Present',
            header: 'Lead Software Architect & Full-Stack Developer | DevOps & Security | UI/UX Designer',
            description: 'I led the end-to-end development of a cutting-edge web platform, combining strategic technical leadership with an entrepreneurial mindset. I designed and implemented scalable frontend and backend architectures, optimized performance, and ensured security best practices. My role encompassed hands-on development, design, infrastructure management, and deployment automation, leveraging modern technologies to drive innovation and efficiency'
        },
        {
            year: 'Jun 2022 - May 2023',
            header: 'Junior Angular Developer',
            description: 'I possess advanced expertise in object-oriented programming, RxJS, TypeScript, and testing methodologies. I have developed skills in frontend development, component design, error monitoring, and agile project management through practical application and technical challenges'
        },
        {
            year: 'Jul 2020 - Aug 2020',
            header: 'Intern Angular Developer',
            description: 'The development of an alert system and tree-select components in Angular is underway, accompanied by the implementation of comprehensive testing and UI standards'
        }
    ];
}
