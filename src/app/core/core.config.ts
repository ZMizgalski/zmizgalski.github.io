import { ApplicationConfig } from '@angular/core';

import { NAV_LINKS, NavLinkSection } from './utils';


export const coreConfig: ApplicationConfig = {
    providers: [
        {
            provide: NAV_LINKS,
            useValue: [
                {
                    name: 'Overview',
                    id: NavLinkSection.OVERVIEW
                },
                {
                    name: 'Education',
                    id: NavLinkSection.EDUCATION
                },
                {
                    name: 'Achievements',
                    id: NavLinkSection.ACHIEVEMENTS
                },
                {
                    name: 'Experience',
                    id: NavLinkSection.EXPERIENCE
                },
                {
                    name: 'Projects',
                    id: NavLinkSection.PROJECTS
                }
            ]
        }
    ]
};
