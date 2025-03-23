import { DOCUMENT } from '@angular/common';
import { afterNextRender, ChangeDetectionStrategy, Component, DestroyRef, inject, ViewEncapsulation } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, tap } from 'rxjs';

import { isNonNullish, scrollIntoView } from '@shared/utils';
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
export class ZMWelcomeComponent {
    private readonly _id$ = inject(ActivatedRoute).queryParamMap
        .pipe(
            map(paramMap => paramMap.get('id'))
        );

    private readonly _scrollIntoView = scrollIntoView(inject(DOCUMENT), inject(Router));

    constructor(
        private readonly _destroyRef: DestroyRef
    ) {
        afterNextRender(() => {
            this._id$
                .pipe(
                    filter(isNonNullish),
                    tap(id => this._scrollIntoView(id)),
                    takeUntilDestroyed(this._destroyRef)
                )
                .subscribe();
        });
    }
}
