import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ZMAchievementsComponent } from './components/achievements/achievements.component';
import { ZMEducationComponent } from './components/education/education.component';
import { ZMExperienceComponent } from './components/experience/experience.component';
import { ZMHeroSectionComponent } from './components/hero-section/hero-section.component';
import { ZMOverviewComponent } from './components/overview/overview.component';
import { ZMProjectsComponent } from './components/projects/projects.components';


@Component({
    templateUrl: './welcome.component.html',
    imports: [
        ZMAchievementsComponent, ZMEducationComponent, ZMExperienceComponent,
        ZMHeroSectionComponent, ZMOverviewComponent, ZMProjectsComponent
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class ZMWelcomeComponent {}
