import { InjectionToken } from '@angular/core';

import { NavLink } from '@core/components/nav/models/nav.types';


export const NAV_LINKS = new InjectionToken<NavLink[]>('NAV_LINKS');
