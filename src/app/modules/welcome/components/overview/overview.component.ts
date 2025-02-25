import { DOCUMENT, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';

import { OverviewModel } from '../../models/welcome.types';

import { scrollIntoView } from '@shared/utils';

import { NavLinkSection } from '@core/utils';

import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroArrowRight } from '@ng-icons/heroicons/outline';
import { heroBookOpenSolid, heroRocketLaunchSolid, heroSparklesSolid, heroTrophySolid, heroWrenchScrewdriverSolid } from '@ng-icons/heroicons/solid';


@Component({
    selector: 'zm-overview',
    templateUrl: './overview.component.html',
    imports: [ NgIcon, NgOptimizedImage ],
    providers: [ provideIcons({ heroSparklesSolid, heroArrowRight }) ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    host: {
        id: NavLinkSection.OVERVIEW
    }
})
export class ZMOverviewComponent {
    public readonly overviews: OverviewModel[] = [
        {
            icon: heroBookOpenSolid,
            header: 'Education',
            id: NavLinkSection.EDUCATION,
            description: 'Currently pursuing a degree in Cybersecurity at AGH University of Science and Technology. Focused on developing secure, reliable, and scalable software solutions that set industry standards for quality'
        },
        {
            icon: heroWrenchScrewdriverSolid,
            header: 'Experience',
            id: NavLinkSection.EXPERIENCE,
            description: 'Developed a range of web solutions from simple websites to advanced, security-focused web platforms. Designed, launched, and delivered enterprise-level applications from concept to completion, ensuring measurable business impact'
        },
        {
            icon: heroTrophySolid,
            header: 'Achievements',
            id: NavLinkSection.ACHIEVEMENTS,
            description: 'Accomplished mathematics and technical innovation competitor with multiple prestigious awards. Earned the Third Degree Laureate distinction in Mathematics at the National Olympiad and finalist standing in the Technical Olympiad'
        },
        {
            icon: heroRocketLaunchSolid,
            header: 'Main Projects',
            id: NavLinkSection.PROJECTS,
            description: 'Driven and highly motivated professional with expertise in cybersecurity and secure application development. Innovative problem-solver with strong out-of-the-box thinking capabilities, committed to helping organizations thrive through technology solutions'
        }
    ];

    public readonly scrollIntoView = scrollIntoView(inject(DOCUMENT));
}
