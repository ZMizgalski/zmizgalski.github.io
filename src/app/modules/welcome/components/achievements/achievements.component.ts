import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { AchievementModel } from '../../models/welcome.types';

import { NavLinkSection } from '@core/utils';

import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroTrophySolid } from '@ng-icons/heroicons/solid';


@Component({
    selector: 'zm-achievements',
    templateUrl: './achievements.component.html',
    imports: [ NgIcon ],
    providers: [ provideIcons({ heroTrophySolid }) ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    host: {
        id: NavLinkSection.ACHIEVEMENTS
    }
})
export class ZMAchievementsComponent {
    public readonly achievements: AchievementModel[] = [
        {
            year: 'May 2022',
            header: 'Third Degree Laureate in Mathematics',
            description: 'National Olympiad "For the Diamond Index of AGH"'
        },
        {
            year: 'May 2022',
            header: 'Finalist',
            description: 'Technical Innovation and Invention Olympiad'
        }
    ];
}
