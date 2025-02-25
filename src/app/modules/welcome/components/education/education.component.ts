import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { EducationModel } from '../../models/welcome.types';

import { NavLinkSection } from '@core/utils';

import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroBookOpenSolid, heroCheckCircleSolid } from '@ng-icons/heroicons/solid';


@Component({
    selector: 'zm-education',
    templateUrl: './education.component.html',
    imports: [ NgIcon, NgClass ],
    providers: [ provideIcons({ heroBookOpenSolid, heroCheckCircleSolid }) ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    host: {
        id: NavLinkSection.EDUCATION
    }
})
export class ZMEducationComponent {
    public readonly educations: EducationModel[] = [
        {
            year: 'Oct 2022 - Present',
            header: 'Cybersecurity Engineer',
            description: 'AGH University of Science and Technology'
        },
        {
            year: 'Jan 2014 - Apr 2018',
            header: 'Electronics technician',
            description: 'Upper Secondary School of Communications'
        }
    ];
}
