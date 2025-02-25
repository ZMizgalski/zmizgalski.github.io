import { afterNextRender, ChangeDetectionStrategy, Component, OnDestroy, signal, ViewEncapsulation } from '@angular/core';

import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroHandRaisedSolid } from '@ng-icons/heroicons/solid';
import {
    svglAngular, svglAzure, svglCss, svglDigitalocean, svglGit, svglGrafana,
    svglHtml5, svglJavascript, svglJest, svglJwt, svglMetamask, svglPostgresql,
    svglRaspberryPi, svglRxjs, svglSass, svglSentry, svglTailwindcss, svglTensorflow,
    svglTypescript, svglZod
} from '@ng-icons/svgl';

import Typed from 'typed.js';


@Component({
    selector: 'zm-hero-section',
    templateUrl: './hero-section.component.html',
    imports: [ NgIcon ],
    providers: [ provideIcons({ heroHandRaisedSolid }) ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class ZMHeroSectionComponent implements OnDestroy {
    public readonly technologies: string[] = [
        svglAngular, svglSass, svglCss, svglAzure, svglDigitalocean,
        svglGit, svglGrafana, svglHtml5, svglJavascript, svglJest,
        svglJwt, svglMetamask, svglPostgresql, svglRaspberryPi,
        svglRxjs, svglSentry, svglTailwindcss, svglTensorflow,
        svglTypescript, svglZod
    ];

    private readonly _subHeaderTyping = signal<Typed | null>(null);

    constructor() {
        afterNextRender(() => {
            const subHeaderTyping = this._createSubHeaderTyping();

            this._subHeaderTyping.set(subHeaderTyping);
        });
    }

    public ngOnDestroy(): void {
        this._subHeaderTyping()?.destroy();
    }

    private _createSubHeaderTyping(): Typed {
        return new Typed(
            '#typing-sub-header',
            {
                strings: [
                    'Lead Software Architect',
                    'Full-Stack Developer',
                    'DevOps',
                    'DevSecOps',
                    'UI/UX Designer'
                ],
                typeSpeed: 40,
                loop: true
            }
        );
    }
}
