import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ProjectModel } from '../../models/welcome.types';

import { NavLinkSection } from '@core/utils';

import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroPhotoSolid } from '@ng-icons/heroicons/solid';


@Component({
    selector: 'zm-projects',
    templateUrl: './projects.components.html',
    imports: [ NgOptimizedImage, NgIcon ],
    providers: [ provideIcons({ heroPhotoSolid }) ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    host: {
        id: NavLinkSection.PROJECTS
    }
})
export class ZMProjectsComponent {
    public readonly projects: ProjectModel[] = [
        {
            header: 'Nacksy',
            description: 'I was responsible for the architecture, design, development, and delivery of a scalable, secure, and fully customizable affiliate marketing platform with a custom admin panel for creators and advanced security features. The platform was designed to help users effortlessly find the best and most affordable products while enabling passive income and building virtual reputation',
            image: '../../../../../assets/nacksy.webp',
            link: 'https://nacksy.com'
        },
        {
            header: 'Service Templates',
            description: 'It was created to automatically generate configuration files to streamline the creation of service templates such as Docker, CircleCI and other infrastructure-related files. The tool reduces manual effort by dynamically generating complete configuration files based on structured JSON input',
            image: '../../../../../assets/service-templates.webp',
            link: 'https://github.com/ZMizgalski/service-templates'
        },
        {
            header: 'SIGNALWAY',
            description: 'Developed an AI-powered railway safety system for a national infrastructure improvement competition that uses object detection technology to intelligently control crossing barriers. The solution connects to a central network and features a client application that manages Raspberry Pi-controlled servo mechanisms, enhancing both safety and efficiency at railroad crossings',
            image: '../../../../../assets/signalway.webp',
            link: 'https://github.com/ZMizgalski/Level-Crossing-Python-Client'
        }
    ];
}
